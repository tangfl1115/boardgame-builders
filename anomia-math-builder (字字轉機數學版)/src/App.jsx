// Version: 1.1.0
// Changelog:
// - Added custom card back color selection for print settings with 6 dark colors to prevent transparency.
// - Wrapped activeVersion with displayVersion to apply overrides to CardBack.
import React, { useState, useMemo, useRef } from 'react';
import { Card, renderMathText } from './components/Card';
import { CardBack } from './components/CardBack';
import { icons, Icon } from './components/Icons';
import { Editor } from './components/Editor';
import { useGameData } from './hooks/useGameData';
import './index.css';

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

function App() {
    const { gameData, exportData, importData, updateVersion } = useGameData();
    const [view, setView] = useState('gallery');
    const [currentVersion, setCurrentVersion] = useState('anomia-math-7a-read');
    const [inkSaver, setInkSaver] = useState(false);
    const [fullPageBack, setFullPageBack] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [backColorOverride, setBackColorOverride] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    
    const fileInputRef = useRef(null);

    // 確保有找到對應版本，否則降級到第一個
    const activeVersion = gameData[currentVersion] || Object.values(gameData)[0];
    
    // 計算包含卡背自訂顏色的版本資料
    const displayVersion = useMemo(() => {
        return {
            ...activeVersion,
            backColor: backColorOverride || activeVersion.backColor,
            backBorder: backColorOverride || activeVersion.backBorder
        };
    }, [activeVersion, backColorOverride]);
    const activeCards = activeVersion.cards || [];
    const activeRule = activeVersion.rules || [];

    const filteredCards = useMemo(() => {
        if (!searchQuery.trim()) return activeCards;
        const q = searchQuery.toLowerCase();
        return activeCards.filter(card => 
            card.name.toLowerCase().includes(q) || 
            card.effect.toLowerCase().includes(q) || 
            card.summary.toLowerCase().includes(q) || 
            card.value.toLowerCase().includes(q)
        );
    }, [activeCards, searchQuery]);

    const exportExcelTable = () => {
        const headers = ["卡牌序號", "圖案名稱", "主題類別", "卡牌題目", "卡牌答案", "張數"];
        const rows = activeCards.map(card => [
            card.id,
            card.value,
            card.summary,
            card.name,
            card.effect,
            card.count
        ]);
        const csvContent = [
            headers.join(","),
            ...rows.map(row => row.map(val => {
                const str = String(val === undefined || val === null ? '' : val);
                if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                    return `"${str.replace(/"/g, '""')}"`;
                }
                return str;
            }).join(","))
        ].join("\n");
        const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `${activeVersion.name}_題目與答案對照表.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const allPrintCards = useMemo(() => {
        const cards = activeCards.flatMap(card => 
            Array.from({ length: card.count }, () => card)
        );
        const ruleCardCount = 6;
        const ruleCards = Array.from({ length: ruleCardCount }, () => ({
            id: 'rule',
            isRuleCard: true,
            content: activeRule
        }));
        return [...cards, ...ruleCards];
    }, [activeCards, activeRule]);

    const actualCardsPerPage = view === 'print-6' ? 6 : (view === 'print-4' ? 4 : 9);
    const pages = chunkArray(allPrintCards, actualCardsPerPage);

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            await importData(file);
            alert("資料匯入成功！");
        } catch (error) {
            alert("匯入失敗：" + error.message);
        }
        e.target.value = null; // reset
    };

    return (
        <div className="min-h-screen flex">
            {/* 編輯器側邊欄 */}
            {isEditing && (
                <Editor 
                    versionData={activeVersion}
                    onUpdateVersionData={(newData) => updateVersion(activeVersion.id, newData)}
                />
            )}

            {/* 主預覽區 */}
            <div className={`flex-1 overflow-y-auto ${isEditing ? 'bg-slate-300' : ''}`}>
                <div className="max-w-7xl mx-auto p-2 md:p-4 print-hidden">
                    <header className="bg-white p-3 rounded-xl shadow border border-stone-300 flex flex-col gap-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                                <h1 className="text-xl md:text-2xl font-black text-[#8b4513] flex items-center gap-2">
                                    <Icon path={icons.Sparkles} color="#8b5cf6" />
                                    字字轉機國中數學版產生器
                                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full font-bold ml-2">國中一年級 (七年級) 適用</span>
                                    {activeVersion.referenceGame && (
                                        <span className="text-xs px-2 py-1 bg-slate-100 text-slate-500 rounded-full font-normal border ml-1">
                                            機制參考: {activeVersion.referenceGame}
                                        </span>
                                    )}
                                </h1>
                                <div className="flex gap-2 mt-1">
                                    {Object.values(gameData).map(v => (
                                        <button 
                                            key={v.id}
                                            onClick={() => setCurrentVersion(v.id)}
                                            className={`px-2 py-0.5 rounded text-xs font-bold border transition-colors ${currentVersion === v.id ? 'bg-[#8b4513] text-white border-[#8b4513]' : 'bg-white text-stone-500 border-stone-300'}`}
                                        >
                                            {v.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 items-center flex-wrap justify-end">
                                <div className="flex bg-slate-100 p-1 rounded gap-1 mr-2 border">
                                    <button onClick={() => setIsEditing(!isEditing)} className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1 ${isEditing ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 text-slate-700'}`}>
                                        <Icon path={icons.Layers} color={isEditing ? 'white' : 'currentColor'} size={14} />
                                        {isEditing ? '關閉編輯器' : '編輯模式'}
                                    </button>
                                    <button onClick={exportData} className="px-3 py-1 rounded text-xs font-bold hover:bg-slate-200 text-slate-700" title="將目前的卡牌下載為備份檔">
                                        匯出存檔
                                    </button>
                                    <button onClick={handleImportClick} className="px-3 py-1 rounded text-xs font-bold hover:bg-slate-200 text-slate-700" title="載入之前備份的卡牌檔">
                                        匯入存檔
                                    </button>
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".json" className="hidden" />
                                </div>

                                <div className="flex items-center gap-2 border-r pr-2 border-stone-200 mr-1">
                                    <span className="text-xs font-bold text-stone-500">卡背深色:</span>
                                    <div className="flex gap-1">
                                        {/* 預設顏色 */}
                                        <button
                                            type="button"
                                            onClick={() => setBackColorOverride('')}
                                            className={`w-5 h-5 rounded-full border transition-all cursor-pointer flex items-center justify-center text-[9px] font-bold ${!backColorOverride ? 'ring-2 ring-indigo-500 border-indigo-500 scale-110' : 'border-stone-300 hover:scale-105'}`}
                                            title="預設卡背"
                                            style={{ backgroundColor: activeVersion.backColor }}
                                        >
                                            {!backColorOverride && '✓'}
                                        </button>
                                        {[
                                            { name: '經典深紅', hex: '#881337' },
                                            { name: '爵士深藍', hex: '#1e3a8a' },
                                            { name: '墨綠森林', hex: '#064e3b' },
                                            { name: '尊爵深紫', hex: '#581c87' },
                                            { name: '暗影炭黑', hex: '#18181b' },
                                            { name: '巧克力棕', hex: '#451a03' }
                                        ].map(c => (
                                            <button
                                                key={c.hex}
                                                type="button"
                                                onClick={() => setBackColorOverride(c.hex)}
                                                className={`w-5 h-5 rounded-full border transition-all cursor-pointer flex items-center justify-center text-white text-[9px] ${backColorOverride === c.hex ? 'ring-2 ring-indigo-500 border-indigo-500 scale-110' : 'border-stone-300 hover:scale-105'}`}
                                                style={{ backgroundColor: c.hex }}
                                                title={c.name}
                                            >
                                                {backColorOverride === c.hex && '✓'}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button onClick={() => setInkSaver(!inkSaver)} className={`px-2 py-1 rounded text-xs border font-bold ${inkSaver ? 'bg-green-600 text-white' : 'bg-white text-slate-700'}`}>
                                    省墨模式
                                </button>
                                <button onClick={() => setFullPageBack(!fullPageBack)} className={`px-2 py-1 rounded text-xs border font-bold ${fullPageBack ? 'bg-pink-600 text-white' : 'bg-white text-slate-700'}`}>
                                    滿版背圖
                                </button>
                                <button onClick={() => window.print()} className="px-4 py-1 bg-stone-800 text-white rounded text-sm font-bold shadow hover:bg-stone-700 flex items-center gap-1">
                                    <Icon path={icons.Printer} color="white" size={16}/> 列印
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 border-t pt-2 border-stone-100 justify-center">
                            <button onClick={() => setView('gallery')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'gallery' ? 'bg-[#8b4513] text-white' : 'text-stone-500 hover:bg-stone-100'}`}>瀏覽</button>
                            <button onClick={() => setView('print-standard')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'print-standard' ? 'bg-blue-600 text-white' : 'text-stone-500 hover:bg-blue-50'}`}>雙面(9)</button>
                            <button onClick={() => setView('print-6')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'print-6' ? 'bg-blue-600 text-white' : 'text-stone-500 hover:bg-blue-50'}`}>雙面(6)</button>
                            <button onClick={() => setView('print-4')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'print-4' ? 'bg-blue-600 text-white' : 'text-stone-500 hover:bg-blue-50'}`}>雙面(4)</button>
                            <button onClick={() => setView('print-single')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'print-single' ? 'bg-purple-600 text-white' : 'text-stone-500 hover:bg-purple-50'}`}>單張</button>
                        </div>
                    </header>
                </div>

                {view === 'gallery' ? (
                    <div className="max-w-7xl mx-auto flex flex-col items-center">
                        {/* 數學題目與答案對照表區塊 */}
                        <div className="w-full max-w-5xl mt-6 px-4 print-hidden">
                            <div className="bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden">
                                <div className="bg-slate-900 text-white p-4 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-6 bg-amber-500 rounded-full"></div>
                                        <h3 className="font-bold text-lg tracking-wide">數學題目與答案對照表 (對答案專用)</h3>
                                    </div>
                                    <button 
                                        onClick={exportExcelTable} 
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                                        title="下載此對照表為 Excel / CSV 格式"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        匯出 Excel 對照表 (.csv)
                                    </button>
                                </div>
                                <div className="p-4 bg-slate-50 border-b border-stone-200 flex items-center gap-2">
                                    <div className="relative flex-1">
                                        <input 
                                            type="text" 
                                            placeholder="輸入關鍵字搜尋題目、答案、類別或圖案..." 
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-9 pr-4 py-2 bg-white border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                        <svg className="w-4 h-4 absolute left-3 top-3 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    {searchQuery && (
                                        <button 
                                            onClick={() => setSearchQuery('')}
                                            className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                                        >
                                            清除
                                        </button>
                                    )}
                                </div>
                                
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase border-b border-stone-200">
                                                <th className="p-3 w-16 text-center">序號</th>
                                                <th className="p-3 w-28">圖案名稱</th>
                                                <th className="p-3 w-40">主題類別</th>
                                                <th className="p-3">卡牌題目</th>
                                                <th className="p-3 w-48">卡牌答案 / 提示</th>
                                                <th className="p-3 w-16 text-center">張數</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-stone-100 text-sm">
                                            {filteredCards.length > 0 ? (
                                                filteredCards.map((card, idx) => (
                                                    <tr key={card.id || idx} className="hover:bg-slate-50 transition-colors">
                                                        <td className="p-3 text-center text-stone-500 font-mono text-xs">{card.id}</td>
                                                        <td className="p-3">
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="w-3.5 h-3.5 rounded-sm shadow-sm inline-block shrink-0" style={{ backgroundColor: card.hex }}></span>
                                                                <span className="font-bold text-slate-800 uppercase text-xs">{card.value}</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-3">
                                                            <span className="text-xs px-2 py-1 bg-stone-100 border border-stone-200 text-stone-600 rounded-full font-medium">
                                                                {card.summary}
                                                            </span>
                                                        </td>
                                                        <td className="p-3 font-semibold text-slate-800 text-base">
                                                            {renderMathText(card.name)}
                                                        </td>
                                                        <td className="p-3 text-emerald-700 font-bold font-mono">
                                                            {card.effect}
                                                        </td>
                                                        <td className="p-3 text-center text-stone-500 font-medium">{card.count}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="p-8 text-center text-stone-400 font-medium bg-white">
                                                        找不到符合搜尋條件的卡牌 🔍
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="gap-6 p-4 max-w-7xl mx-auto flex flex-wrap justify-center mt-4">
                            {activeCards.map(card => <Card key={card.id || card.name} card={card} inkSaver={inkSaver} version={currentVersion} />)}
                            <div className="w-full text-center mt-8">
                                <h2 className="text-xl font-bold text-stone-600 mb-2">卡背預覽</h2>
                                <div className="flex justify-center">
                                    <CardBack inkSaver={inkSaver} versionData={displayVersion} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (view === 'print-standard' || view === 'print-6' || view === 'print-4') ? (
                    <div className="preview-container">
                        {pages.map((pageCards, pageIndex) => (
                            <React.Fragment key={pageIndex}>
                                <div className="sheet">
                                    <div className="grid-layout" style={{ 
                                        gridTemplateColumns: view === 'print-4' ? 'repeat(2, 90mm)' : 'repeat(3, 64mm)',
                                        gridTemplateRows: view === 'print-4' ? 'repeat(2, 130mm)' : (view === 'print-6' ? 'repeat(2, 89mm)' : 'repeat(3, 89mm)') 
                                    }}>
                                        {pageCards.map((card, idx) => (
                                            <Card 
                                                key={`front-${pageIndex}-${idx}`} 
                                                card={card} 
                                                inkSaver={inkSaver} 
                                                version={currentVersion}
                                                size={view === 'print-4' ? 'medium' : 'standard'}
                                            />
                                        ))}
                                    </div>
                                </div>
                                
                                {fullPageBack ? (
                                    <div className="sheet" style={{ backgroundColor: displayVersion.backBorder }}>
                                    </div>
                                ) : (
                                    <div className="sheet">
                                        <div className="grid-layout" style={{ 
                                            gridTemplateColumns: view === 'print-4' ? 'repeat(2, 90mm)' : 'repeat(3, 64mm)',
                                            gridTemplateRows: view === 'print-4' ? 'repeat(2, 130mm)' : (view === 'print-6' ? 'repeat(2, 89mm)' : 'repeat(3, 89mm)') 
                                        }}>
                                            {pageCards.map((_, idx) => (
                                                <CardBack 
                                                    key={`back-${pageIndex}-${idx}`} 
                                                    inkSaver={inkSaver} 
                                                    versionData={displayVersion}
                                                    size={view === 'print-4' ? 'medium' : 'standard'}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                ) : (
                    <div className="bg-stone-200 p-8 gap-8 flex flex-wrap justify-center">
                        {allPrintCards.map((card, index) => (
                            <div key={`single-${index}`}>
                                <Card 
                                    card={card} 
                                    inkSaver={inkSaver} 
                                    version={currentVersion}
                                    size="large-print"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
