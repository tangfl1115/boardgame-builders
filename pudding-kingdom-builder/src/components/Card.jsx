import React from 'react';
import { icons } from './Icons';

export const Card = ({ card, size = 'standard', inkSaver = false, version }) => {
    const isLargePrint = size === 'large-print';
    const isMediumPrint = size === 'medium';
    
    const nameLength = card.name ? card.name.length : 0;
    const isLongName = nameLength > 7;



    if (card.isRuleCard) {
        return (
            <div 
                className={`
                    relative flex flex-col overflow-hidden box-border force-print-bg
                    ${isLargePrint ? 'card-large m-0 page-break' : (isMediumPrint ? 'card-medium m-0' : 'card-standard m-4')}
                `}
                style={{ 
                    width: isLargePrint ? '180mm' : (isMediumPrint ? '90mm' : '64mm'),
                    height: isLargePrint ? '250mm' : (isMediumPrint ? '130mm' : '89mm'),
                    backgroundColor: '#fbbf24', // Amber 400 for clay look
                    color: '#451a03',
                    borderRadius: isLargePrint ? '40px' : '24px',
                    border: '4px solid #fff',
                    boxShadow: 'inset -6px -6px 12px rgba(0,0,0,0.15), inset 6px 6px 12px rgba(255,255,255,0.6), 4px 8px 16px rgba(0,0,0,0.2)',
                    printColorAdjust: 'exact', 
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                <div 
                    className="text-center shrink-0 force-print-bg"
                    style={{ 
                        padding: isLargePrint ? '16px' : (isMediumPrint ? '12px' : '8px'), 
                        backgroundColor: '#f59e0b',
                        borderRadius: isLargePrint ? '36px 36px 0 0' : '20px 20px 0 0',
                        boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.1)',
                        printColorAdjust: 'exact', 
                        WebkitPrintColorAdjust: 'exact'
                    }}
                >
                    <h2 className={`font-sans font-black tracking-widest ${isLargePrint ? 'text-4xl' : (isMediumPrint ? 'text-2xl' : 'text-lg')} text-white drop-shadow-md`}>
                        遊戲規則
                    </h2>
                </div>
                <div className="flex-1 flex flex-col overflow-hidden force-print-bg p-2">
                    <div className="flex-1 flex flex-col h-full justify-evenly bg-white/60 rounded-xl p-2" style={{ boxShadow: 'inset 2px 2px 8px rgba(0,0,0,0.05)' }}> 
                        {card.content.map((rule, idx) => (
                            <div key={idx} className="flex flex-col border-b-2 border-amber-500/30 border-dashed last:border-0 pb-1 mb-1">
                                <div className={`font-black text-amber-900 ${isLargePrint ? 'text-3xl' : (isMediumPrint ? 'text-xl' : 'text-xs')} drop-shadow-sm`}>{rule.title}</div>
                                <div className={`text-amber-950 font-bold ${isLargePrint ? 'text-2xl mt-1 leading-tight' : (isMediumPrint ? 'text-lg leading-tight' : 'text-[10px] leading-snug')}`}>
                                    {rule.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    // Claymorphism colors
    const mainColor = inkSaver ? '#f8fafc' : card.hex;
    // User requested dark colors for text
    const textColor = '#0f172a';
    const numBgColor = '#ffffff';
    const numTextColor = '#0f172a'; // always dark

    const getTitleFontSize = () => {
        if (isLargePrint) return 'text-6xl';
        if (isMediumPrint) return 'text-4xl';
        return isLongName ? 'text-[15px]' : 'text-xl';
    };

    return (
        <div 
            className={`
                relative flex flex-col overflow-hidden box-border force-print-bg
                ${isLargePrint ? 'card-large m-0 page-break' : (isMediumPrint ? 'card-medium m-0' : 'card-standard m-4 hover:scale-105 transition-transform')}
            `}
            style={{
                width: isLargePrint ? '180mm' : (isMediumPrint ? '90mm' : '64mm'),
                height: isLargePrint ? '250mm' : (isMediumPrint ? '130mm' : '89mm'),
                backgroundColor: mainColor,
                borderRadius: isLargePrint ? '40px' : '24px',
                border: inkSaver ? `4px solid ${card.hex}` : '4px solid rgba(255,255,255,0.7)',
                boxShadow: inkSaver ? 'none' : 'inset -8px -8px 16px rgba(0,0,0,0.15), inset 8px 8px 16px rgba(255,255,255,0.5), 6px 10px 20px rgba(0,0,0,0.2)',
                printColorAdjust: 'exact',
                WebkitPrintColorAdjust: 'exact'
            }}
        >
            {/* Header Area */}
            <div 
                className="relative flex items-center justify-center z-10 force-print-bg px-2"
                style={{
                    height: '25%',
                    backgroundColor: 'rgba(255,255,255,0.4)', // lighter for dark text contrast
                    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                    borderBottom: '2px solid rgba(255,255,255,0.5)',
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                {/* Left Faction Badge */}
                <div 
                    className={`
                        absolute flex items-center justify-center font-sans font-black z-20 force-print-bg
                        ${isLargePrint ? 'w-24 h-24 text-5xl -left-2 top-2' : (isMediumPrint ? 'w-16 h-16 text-3xl left-0 top-2' : 'w-12 h-12 text-2xl left-1 top-1')}
                    `}
                    style={{
                        backgroundColor: '#ffffff',
                        color: card.factionColor || '#ef4444',
                        borderRadius: '50%',
                        border: `4px solid ${card.factionColor || '#ef4444'}`,
                        boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.1), inset 3px 3px 6px rgba(255,255,255,1), 2px 4px 8px rgba(0,0,0,0.15)',
                        printColorAdjust: 'exact',
                        WebkitPrintColorAdjust: 'exact',
                    }}
                    title={`陣營: ${card.faction}`}
                >
                    {card.factionSymbol}
                </div>

                {/* Right Rule Badge */}
                <div 
                    className={`
                        absolute flex items-center justify-center font-sans font-black z-20 force-print-bg
                        ${isLargePrint ? 'w-24 h-24 text-5xl -right-2 top-2' : (isMediumPrint ? 'w-16 h-16 text-3xl right-0 top-2' : 'w-12 h-12 text-2xl right-1 top-1')}
                    `}
                    style={{
                        backgroundColor: '#ffffff',
                        color: '#1f2937',
                        borderRadius: '50%',
                        border: `4px solid ${card.hex}`,
                        boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.1), inset 3px 3px 6px rgba(255,255,255,1), 2px 4px 8px rgba(0,0,0,0.15)',
                        printColorAdjust: 'exact',
                        WebkitPrintColorAdjust: 'exact',
                    }}
                    title={`回答規則: ${card.value}`}
                >
                    {card.value}
                </div>
                
                {/* Title */}
                <div className={`w-full flex justify-center items-center ${isLargePrint ? 'px-24' : (isMediumPrint ? 'px-16' : 'px-12')}`}>
                    <h2 className={`font-sans font-black ${getTitleFontSize()} leading-none text-center`}
                        style={{ 
                            color: textColor,
                        }}>
                        {card.name}
                    </h2>
                </div>
            </div>

            {/* Middle Effect Area - Big Summary */}
            <div 
                className="relative w-full flex flex-col items-center justify-end overflow-hidden force-print-bg p-2"
                style={{
                    flex: '1',
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                {/* Big 3D Image */}
                {card.imagePath && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ paddingBottom: isLargePrint ? '80px' : '40px' }}>
                        <div style={{
                            width: isLargePrint ? '160px' : (isMediumPrint ? '100px' : '75px'),
                            height: isLargePrint ? '160px' : (isMediumPrint ? '100px' : '75px'),
                            backgroundColor: '#ffffff',
                            borderRadius: '50%',
                            boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.1), inset 4px 4px 8px rgba(255,255,255,1), 4px 8px 16px rgba(0,0,0,0.3)',
                            border: `4px solid rgba(255,255,255,0.8)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Use mix-blend-mode: multiply so the image blends smoothly with the white circle, eliminating any sharp edges */}
                            <img src={card.imagePath} alt={card.name} style={{ width: '130%', height: '130%', objectFit: 'cover', mixBlendMode: 'multiply' }} />
                        </div>
                    </div>
                )}
                
                <div className={`
                    w-full flex items-center justify-center font-sans font-black text-center force-print-bg relative z-10
                    ${isLargePrint ? 'text-6xl px-4 py-4' : (isMediumPrint ? 'text-4xl px-3 py-3' : 'text-[17px] px-1 py-1.5')}
                `} style={{ 
                    backgroundColor: 'rgba(255,255,255,0.75)', // Higher opacity for readability
                    color: textColor, // Dark text
                    borderRadius: isLargePrint ? '24px' : '16px',
                    boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.05), inset -4px -4px 8px rgba(255,255,255,0.8), 2px 2px 8px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(4px)'
                }}>
                    {card.summary}
                </div>
            </div>

            {/* Bottom Effect Area */}
            <div 
                className="relative flex items-center justify-center px-2 py-2 mx-2 mb-2 force-print-bg"
                style={{
                    height: isLargePrint ? '30%' : '35%',
                    backgroundColor: '#ffffff',
                    borderRadius: isLargePrint ? '20px' : '12px',
                    boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.05), 0 -2px 10px rgba(0,0,0,0.1)',
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact',
                    zIndex: 20
                }}
            >
                <p className={`
                    font-sans font-bold text-center tracking-wide w-full
                    ${isLargePrint ? 'text-4xl leading-relaxed' : (isMediumPrint ? 'text-2xl leading-relaxed' : 'text-[12px] leading-tight')}
                `} style={{ color: '#0f172a' }}>
                    {card.effect}
                </p>
            </div>
        </div>
    );
};
