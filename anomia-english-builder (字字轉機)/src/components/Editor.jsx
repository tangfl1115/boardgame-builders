import React, { useState } from 'react';
import { Icon, icons } from './Icons';

export const Editor = ({ versionData, onUpdateVersionData }) => {
    const [selectedCardIdx, setSelectedCardIdx] = useState(0);
    const [activeTab, setActiveTab] = useState('cards'); // 'cards' | 'rules' | 'settings'

    const handleCardChange = (idx, field, value) => {
        const newCards = [...versionData.cards];
        
        // Handle number inputs
        let finalValue = value;
        if (field === 'count' || field === 'value') {
            finalValue = parseInt(value, 10);
            if (isNaN(finalValue)) finalValue = 0;
        }

        newCards[idx] = { ...newCards[idx], [field]: finalValue };
        
        onUpdateVersionData({
            ...versionData,
            cards: newCards
        });
    };

    const handleAddCard = () => {
        const newCard = { 
            id: Date.now(), // Generate a unique ID
            name: '新卡牌', 
            count: 1, 
            value: 0, 
            effect: '效果說明', 
            hex: '#475569', 
            textHex: '#ffffff', 
            enName: 'New', 
            summary: '摘要', 
            iconKey: 'HelpCircle' 
        };
        const newCards = [...versionData.cards, newCard];
        onUpdateVersionData({ ...versionData, cards: newCards });
        setSelectedCardIdx(newCards.length - 1);
    };

    const handleDeleteCard = (idx) => {
        if (versionData.cards.length <= 1) return; // Must have at least one card
        const newCards = versionData.cards.filter((_, i) => i !== idx);
        onUpdateVersionData({ ...versionData, cards: newCards });
        setSelectedCardIdx(Math.max(0, idx - 1));
    };

    const handleRuleChange = (idx, field, value) => {
        const newRules = [...versionData.rules];
        let finalValue = value;
        if (field === 'count' || field === 'pt') {
            finalValue = parseInt(value, 10);
            if (isNaN(finalValue)) finalValue = 0;
        }
        newRules[idx] = { ...newRules[idx], [field]: finalValue };
        onUpdateVersionData({ ...versionData, rules: newRules });
    };

    const handleSettingsChange = (field, value) => {
        onUpdateVersionData({ ...versionData, [field]: value });
    };

    const selectedCard = versionData.cards[selectedCardIdx];

    return (
        <div className="flex flex-col h-full bg-slate-50 border-r border-slate-200 shadow-lg print-hidden" style={{ minWidth: '350px', maxWidth: '400px' }}>
            <div className="p-4 bg-slate-800 text-white font-bold flex justify-between items-center shrink-0">
                <span>🔧 管理後臺：{versionData.name}</span>
            </div>
            
            {/* Tabs */}
            <div className="flex border-b border-slate-200 shrink-0 bg-white">
                <button 
                    className={`flex-1 py-2 text-sm font-bold ${activeTab === 'cards' ? 'border-b-2 border-slate-800 text-slate-800' : 'text-slate-400'}`}
                    onClick={() => setActiveTab('cards')}
                >
                    卡牌設計
                </button>
                <button 
                    className={`flex-1 py-2 text-sm font-bold ${activeTab === 'rules' ? 'border-b-2 border-slate-800 text-slate-800' : 'text-slate-400'}`}
                    onClick={() => setActiveTab('rules')}
                >
                    規則設計
                </button>
                <button 
                    className={`flex-1 py-2 text-sm font-bold ${activeTab === 'settings' ? 'border-b-2 border-slate-800 text-slate-800' : 'text-slate-400'}`}
                    onClick={() => setActiveTab('settings')}
                >
                    全域設定
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                {activeTab === 'settings' && (
                    <div className="space-y-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-slate-500">版本名稱</label>
                            <input 
                                type="text" 
                                className="border p-2 rounded text-sm w-full"
                                value={versionData.name}
                                onChange={(e) => handleSettingsChange('name', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-slate-500">卡背主顏色 (Hex)</label>
                            <div className="flex gap-2">
                                <input 
                                    type="color" 
                                    className="border rounded w-10 h-10 p-1"
                                    value={versionData.backColor}
                                    onChange={(e) => handleSettingsChange('backColor', e.target.value)}
                                />
                                <input 
                                    type="text" 
                                    className="border p-2 rounded text-sm flex-1"
                                    value={versionData.backColor}
                                    onChange={(e) => handleSettingsChange('backColor', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-slate-500">卡背邊框顏色 (Hex)</label>
                            <div className="flex gap-2">
                                <input 
                                    type="color" 
                                    className="border rounded w-10 h-10 p-1"
                                    value={versionData.backBorder}
                                    onChange={(e) => handleSettingsChange('backBorder', e.target.value)}
                                />
                                <input 
                                    type="text" 
                                    className="border p-2 rounded text-sm flex-1"
                                    value={versionData.backBorder}
                                    onChange={(e) => handleSettingsChange('backBorder', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-slate-500">卡背底紋 (Pattern)</label>
                            <select 
                                className="border p-2 rounded text-sm w-full"
                                value={versionData.pattern}
                                onChange={(e) => handleSettingsChange('pattern', e.target.value)}
                            >
                                <option value="royal-pattern">皇家格紋 (royal-pattern)</option>
                                <option value="flower-pattern">碎花紋 (flower-pattern)</option>
                                <option value="">無底紋</option>
                            </select>
                        </div>
                    </div>
                )}

                {activeTab === 'rules' && (
                    <div className="space-y-6">
                        {versionData.rules.map((rule, idx) => (
                            <div key={idx} className="border p-3 rounded-lg bg-white shadow-sm space-y-3">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-bold text-sm">規則行 {idx + 1}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-slate-500">點數 (PT)</label>
                                        <input type="number" className="border p-1.5 rounded text-sm" value={rule.pt} onChange={(e) => handleRuleChange(idx, 'pt', e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-slate-500">數量</label>
                                        <input type="number" className="border p-1.5 rounded text-sm" value={rule.count} onChange={(e) => handleRuleChange(idx, 'count', e.target.value)} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-slate-500">主標題</label>
                                        <input type="text" className="border p-1.5 rounded text-sm" value={rule.title} onChange={(e) => handleRuleChange(idx, 'title', e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-slate-500">副標題/英文</label>
                                        <input type="text" className="border p-1.5 rounded text-sm" value={rule.en} onChange={(e) => handleRuleChange(idx, 'en', e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">效果描述</label>
                                    <textarea className="border p-1.5 rounded text-sm w-full h-16" value={rule.desc} onChange={(e) => handleRuleChange(idx, 'desc', e.target.value)} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'cards' && selectedCard && (
                    <>
                        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                            {versionData.cards.map((card, idx) => (
                                <button 
                                    key={card.id || idx} 
                                    onClick={() => setSelectedCardIdx(idx)}
                                    className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold border ${selectedCardIdx === idx ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-300'}`}
                                >
                                    {card.value} - {card.name}
                                </button>
                            ))}
                            <button onClick={handleAddCard} className="shrink-0 px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-300">
                                + 新增
                            </button>
                        </div>

                        <div className="space-y-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-black text-slate-700">編輯當前卡牌</h3>
                                <button onClick={() => handleDeleteCard(selectedCardIdx)} className="text-xs text-red-600 hover:underline">
                                    刪除此卡
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">卡牌名稱</label>
                                    <input type="text" className="border p-2 rounded text-sm" value={selectedCard.name} onChange={(e) => handleCardChange(selectedCardIdx, 'name', e.target.value)} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">英文/背景大字</label>
                                    <input type="text" className="border p-2 rounded text-sm" value={selectedCard.enName} onChange={(e) => handleCardChange(selectedCardIdx, 'enName', e.target.value)} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">左上角數值</label>
                                    <input type="number" className="border p-2 rounded text-sm" value={selectedCard.value} onChange={(e) => handleCardChange(selectedCardIdx, 'value', e.target.value)} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">總張數 (列印用)</label>
                                    <input type="number" className="border p-2 rounded text-sm" value={selectedCard.count} onChange={(e) => handleCardChange(selectedCardIdx, 'count', e.target.value)} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">功能短標題 (中央)</label>
                                    <input type="text" className="border p-2 rounded text-sm" value={selectedCard.summary} onChange={(e) => handleCardChange(selectedCardIdx, 'summary', e.target.value)} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">圖示 (IconKey)</label>
                                    <select className="border p-2 rounded text-sm" value={selectedCard.iconKey} onChange={(e) => handleCardChange(selectedCardIdx, 'iconKey', e.target.value)}>
                                        {Object.keys(icons).map(key => (
                                            <option key={key} value={key}>{key}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-slate-500">下方效果說明</label>
                                <textarea className="border p-2 rounded text-sm w-full h-24" value={selectedCard.effect} onChange={(e) => handleCardChange(selectedCardIdx, 'effect', e.target.value)} />
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">卡牌主色調 (Hex)</label>
                                    <div className="flex gap-2">
                                        <input type="color" className="border rounded w-10 h-10 p-1 shrink-0" value={selectedCard.hex} onChange={(e) => handleCardChange(selectedCardIdx, 'hex', e.target.value)} />
                                        <input type="text" className="border p-2 rounded text-sm flex-1" value={selectedCard.hex} onChange={(e) => handleCardChange(selectedCardIdx, 'hex', e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-slate-500">主色調文字色 (Hex)</label>
                                    <div className="flex gap-2">
                                        <input type="color" className="border rounded w-10 h-10 p-1 shrink-0" value={selectedCard.textHex} onChange={(e) => handleCardChange(selectedCardIdx, 'textHex', e.target.value)} />
                                        <input type="text" className="border p-2 rounded text-sm flex-1" value={selectedCard.textHex} onChange={(e) => handleCardChange(selectedCardIdx, 'textHex', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
