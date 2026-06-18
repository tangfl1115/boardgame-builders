import React from 'react';
import { icons } from './Icons';

export const Card = ({ card, size = 'standard', inkSaver = false, version }) => {
    const isLargePrint = size === 'large-print';
    const isMediumPrint = size === 'medium';
    const isSenior = version === 'zh-senior';
    
    const nameLength = card.name ? card.name.length : 0;
    const isLongName = nameLength > 7;

    const IconPath = icons[card.iconKey];

    if (card.isRuleCard) {
        return (
            <div 
                className={`
                    relative flex flex-col overflow-hidden shadow-xl box-border force-print-bg
                    ${isLargePrint ? 'card-large border-[8px] m-0 page-break' : (isMediumPrint ? 'card-medium border-[4px] m-0' : 'card-standard border-[2px] m-4 hover:scale-105 transition-transform')}
                    rounded-xl
                `}
                style={{ 
                    width: isLargePrint ? '180mm' : (isMediumPrint ? '90mm' : '64mm'),
                    height: isLargePrint ? '250mm' : (isMediumPrint ? '130mm' : '89mm'),
                    borderColor: '#1e293b',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    printColorAdjust: 'exact', 
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                <div 
                    className="text-center shrink-0 border-b-2 border-slate-300 force-print-bg"
                    style={{ 
                        padding: isLargePrint ? '12px' : (isMediumPrint ? '8px' : '4px'), 
                        backgroundColor: inkSaver ? '#ffffff' : '#1a2332', 
                        color: inkSaver ? '#000000' : '#ffffff',
                        borderBottom: inkSaver ? '2px solid #000' : '2px solid #cbd5e1',
                        printColorAdjust: 'exact', 
                        WebkitPrintColorAdjust: 'exact'
                    }}
                >
                    <h2 className={`font-sans font-bold tracking-widest ${isLargePrint ? 'text-4xl' : (isMediumPrint ? 'text-2xl' : 'text-base')}`}>
                        {version === 'en-standard' ? 'Rules Reference' : (isSenior ? '遊戲規則 (8種牌)' : '遊戲規則一覽')}
                    </h2>
                </div>
                <div className="flex-1 flex flex-col overflow-hidden bg-white force-print-bg">
                    <div className="flex-1 flex flex-col h-full justify-evenly"> 
                        {card.content.map((rule, idx) => (
                            <div key={idx} className={`flex items-center border-b border-slate-100 last:border-0 px-1`} style={{ height: `${100 / card.content.length}%` }}>
                                <span className={`w-[15%] text-center font-black text-[#c0392b] shrink-0 font-serif ${isLargePrint ? 'text-4xl' : (isMediumPrint ? 'text-3xl' : 'text-xl')}`}>
                                    {rule.pt}
                                </span>
                                <div className="w-[30%] leading-none shrink-0 flex flex-col justify-center pl-1">
                                    <div className={`font-black text-slate-800 ${isLargePrint ? 'text-3xl' : (isMediumPrint ? 'text-xl' : 'text-xs')}`}>{rule.title}</div>
                                    {!isSenior && <div className={`text-slate-500 font-bold ${isLargePrint ? 'text-xl mt-1' : (isMediumPrint ? 'text-sm' : 'text-[7px]')}`}>x {rule.count}</div>}
                                    {isSenior && <div className={`text-slate-500 font-bold ${isLargePrint ? 'text-xl mt-1' : (isMediumPrint ? 'text-sm' : 'text-[9px]')}`}>({rule.count}張)</div>}
                                </div>
                                <div className="flex-1 flex flex-col justify-center leading-none pl-0.5">
                                    <span className={`text-slate-800 font-bold ${isLargePrint ? 'text-2xl leading-tight' : (isMediumPrint ? 'text-sm leading-tight' : (isSenior ? 'text-[9px] leading-tight' : 'text-[8px] leading-[0.95] -ml-[1px]'))}`}>
                                        {rule.desc}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center text-[6px] text-slate-400 shrink-0 force-print-bg" style={{ backgroundColor: '#f0f2f5', padding: '1px' }}>
                    {version === 'en-standard' ? 'Love Letter Rules' : 'Love Letter Rules Reference'}
                </div>
            </div>
        );
    }
    
    const bgStyle = inkSaver ? '#ffffff' : card.hex;
    const textStyle = inkSaver ? card.hex : '#ffffff';
    const borderStyle = inkSaver ? `6px solid ${card.hex}` : '6px solid #c5a059';

    const getTitleFontSize = () => {
        if (isLargePrint) return 'text-6xl';
        if (isMediumPrint) {
            if (version === 'en-standard' && isLongName) return 'text-3xl';
            return 'text-5xl';
        }
        if (version === 'en-standard' && isLongName) return 'text-2xl';
        return isSenior ? 'text-2xl' : 'text-3xl';
    };

    return (
        <div 
            className={`
                relative flex flex-col overflow-hidden shadow-xl box-border force-print-bg
                ${isLargePrint ? 'card-large m-0 page-break' : (isMediumPrint ? 'card-medium m-0' : 'card-standard m-4 hover:scale-105 transition-transform')}
                rounded-2xl
            `}
            style={{
                width: isLargePrint ? '180mm' : (isMediumPrint ? '90mm' : '64mm'),
                height: isLargePrint ? '250mm' : (isMediumPrint ? '130mm' : '89mm'),
                border: isLargePrint ? (inkSaver ? `12px solid ${card.hex}` : '12px solid #c5a059') : borderStyle,
                backgroundColor: '#fffcf5',
                printColorAdjust: 'exact',
                WebkitPrintColorAdjust: 'exact'
            }}
        >
            <div 
                className={`relative flex items-center z-10 border-b-4 force-print-bg ${isLargePrint ? 'h-32 px-4' : (isMediumPrint ? 'h-24 px-3' : 'h-16 px-2')}`}
                style={{
                    borderColor: inkSaver ? card.hex : '#c5a059',
                    background: inkSaver ? '#ffffff' : 'linear-gradient(to right, #f0e6d2, #fffcf5)',
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                <div 
                    className={`
                        absolute flex items-center justify-center font-serif font-black rounded-full border-4 shadow-md z-20 force-print-bg
                        ${isLargePrint ? 'w-24 h-24 text-6xl -left-1 top-3' : (isMediumPrint ? 'w-20 h-20 text-5xl left-2 top-2' : 'w-14 h-14 text-4xl left-4 top-1')}
                    `}
                    style={{
                        borderColor: inkSaver ? card.hex : '#8b4513',
                        color: inkSaver ? '#000000' : '#8b4513',
                        backgroundColor: '#ffffff',
                        printColorAdjust: 'exact',
                        WebkitPrintColorAdjust: 'exact'
                    }}
                >
                    {card.value}
                </div>
                
                <div className={`w-full text-center ${isLargePrint ? 'pl-20' : 'pl-10'}`}>
                    <h2 className={`font-serif font-black tracking-widest ${getTitleFontSize()}`}
                        style={{ color: '#4a3728' }}>
                        {card.name}
                    </h2>
                </div>
            </div>

            <div 
                className="relative w-full flex flex-col items-center justify-center overflow-hidden force-print-bg p-2"
                style={{
                    height: '45%',
                    backgroundColor: bgStyle,
                    color: textStyle,
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                {!inkSaver && (
                    <div className="absolute inset-0 opacity-20" 
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                )}
                
                <div className={`font-serif italic font-bold tracking-wider ${isLargePrint ? 'text-7xl mb-4' : (isMediumPrint ? 'text-5xl mb-2' : 'text-3xl mb-1')}`} 
                     style={{ opacity: 0.9 }}>
                    {card.enName}
                </div>

                <div className={`
                    font-sans font-black border-2 rounded-lg
                    ${isLargePrint ? 'text-9xl px-8 py-2 border-4' : (isMediumPrint ? 'text-6xl px-6 py-1 border-4' : (isSenior ? 'text-3xl px-3 py-0.5' : 'text-4xl px-3 py-0.5'))}
                `} style={{ borderColor: textStyle }}>
                    {card.summary}
                </div>
            </div>

            <div 
                className={`relative flex items-center justify-center px-4 py-2 force-print-bg`}
                style={{
                    height: 'auto',
                    flex: 1,
                    backgroundColor: '#fff9eb',
                    borderTop: inkSaver ? `4px solid ${card.hex}` : '4px solid #c5a059',
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact',
                    zIndex: 20
                }}
            >
                {!inkSaver && (
                <>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-full opacity-30" style={{ backgroundColor: '#c5a059' }}></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-full opacity-30" style={{ backgroundColor: '#c5a059' }}></div>
                </>
                )}
                
                <p className={`
                    font-serif font-medium text-center tracking-wide
                    ${isLargePrint ? 'text-4xl px-8' : (isMediumPrint ? 'text-2xl px-6' : (isSenior ? 'text-xl font-bold leading-normal' : 'text-sm'))}
                `} style={{ color: '#4a3728' }}>
                    {card.effect}
                </p>
            </div>
        </div>
    );
};
