// Version: 1.1.0
// Changelog:
// - Added custom card back color selection for print settings with 6 dark colors to prevent transparency.
// - Wrapped activeVersion with displayVersion to apply overrides to CardBack.
import React, { useState, useMemo, useRef } from 'react';
import { Card } from './components/Card';
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
    const [currentVersion, setCurrentVersion] = useState('zh-standard');
    const [inkSaver, setInkSaver] = useState(false);
    const [fullPageBack, setFullPageBack] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [backColorOverride, setBackColorOverride] = useState('');
    
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
                                <h1 className="text-xl md:text-2xl font-black text-[#be123c] flex items-center gap-2">
                                    <Icon path={icons.Heart} color="#DC2626" />
                                    情書卡牌生成器
                                    <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full font-bold ml-2">支援離線編輯</span>
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
                                            className={`px-2 py-0.5 rounded text-xs font-bold border transition-colors ${currentVersion === v.id ? 'bg-[#be123c] text-white border-[#be123c]' : 'bg-white text-stone-500 border-stone-300'}`}
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
                            <button onClick={() => setView('gallery')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'gallery' ? 'bg-[#be123c] text-white' : 'text-stone-500 hover:bg-stone-100'}`}>瀏覽</button>
                            <button onClick={() => setView('print-standard')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'print-standard' ? 'bg-blue-600 text-white' : 'text-stone-500 hover:bg-blue-50'}`}>雙面(9)</button>
                            <button onClick={() => setView('print-6')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'print-6' ? 'bg-blue-600 text-white' : 'text-stone-500 hover:bg-blue-50'}`}>雙面(6)</button>
                            <button onClick={() => setView('print-4')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'print-4' ? 'bg-blue-600 text-white' : 'text-stone-500 hover:bg-blue-50'}`}>雙面(4)</button>
                            <button onClick={() => setView('print-single')} className={`px-3 py-1 rounded text-xs font-bold ${view === 'print-single' ? 'bg-purple-600 text-white' : 'text-stone-500 hover:bg-purple-50'}`}>單張</button>
                        </div>
                    </header>
                </div>

                {view === 'gallery' ? (
                    <div className="gap-6 p-4 max-w-7xl mx-auto flex flex-wrap justify-center">
                        {activeCards.map(card => <Card key={card.id || card.name} card={card} inkSaver={inkSaver} version={currentVersion} />)}
                        <div className="w-full text-center mt-8">
                            <h2 className="text-xl font-bold text-stone-600 mb-2">卡背預覽</h2>
                            <div className="flex justify-center">
                                <CardBack inkSaver={inkSaver} versionData={displayVersion} />
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
