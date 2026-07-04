import React from 'react';
import { icons } from './Icons';

// SVG Geometric Shape Renderer
export const GeometricShape = ({ shape, color, numberText, size = 'standard' }) => {
    let width = 85;
    let height = 85;
    if (size === 'large-print') {
        width = 180;
        height = 180;
    } else if (size === 'medium') {
        width = 120;
        height = 120;
    } else if (size === 'wild') {
        width = 54;
        height = 54;
    } else if (size === 'wild-medium') {
        width = 80;
        height = 80;
    } else if (size === 'wild-large') {
        width = 120;
        height = 120;
    }

    let svgContent = null;
    switch (shape) {
        case 'circle':
            svgContent = <circle cx="50" cy="50" r="40" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
            break;
        case 'square':
            svgContent = <rect x="12" y="12" width="76" height="76" rx="8" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
            break;
        case 'triangle':
            svgContent = <polygon points="50,8 92,85 8,85" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
            break;
        case 'rectangle':
            svgContent = <rect x="10" y="24" width="80" height="52" rx="8" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
            break;
        case 'rhombus':
            svgContent = <polygon points="50,8 92,50 50,92 8,50" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
            break;
        case 'trapezoid':
            svgContent = <polygon points="28,15 72,15 92,85 8,85" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
            break;
        case 'ellipse':
            svgContent = <ellipse cx="50" cy="50" rx="46" ry="32" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
            break;
        case 'pentagon':
            svgContent = <polygon points="50,8 92,38 76,86 24,86 8,38" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
            break;
        default:
            svgContent = <circle cx="50" cy="50" r="40" fill={color} stroke="#ffffff" strokeWidth="4" filter="url(#soft-shadow)" />;
    }

    const textStyle = {
        fontFamily: 'sans-serif',
        fontWeight: '900',
        fontSize: numberText.length > 5 ? '13px' : '17px',
        fill: '#ffffff',
        textAnchor: 'middle',
        alignmentBaseline: 'middle',
        letterSpacing: '0.5px',
        textShadow: '1px 1px 3px rgba(0,0,0,0.8), -1px -1px 3px rgba(0,0,0,0.8), 1px -1px 3px rgba(0,0,0,0.8), -1px 1px 3px rgba(0,0,0,0.8)'
    };

    return (
        <svg viewBox="0 0 100 100" width={width} height={height} className="select-none inline-block align-middle">
            <defs>
                <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.35" />
                </filter>
            </defs>
            {svgContent}
            <text x="50" y="54" style={textStyle}>
                {numberText.toUpperCase()}
            </text>
        </svg>
    );
};

export const Card = ({ card, size = 'standard', inkSaver = false, version }) => {
    const isLargePrint = size === 'large-print';
    const isMediumPrint = size === 'medium';
    
    const splitSummary = (summary) => {
        if (!summary) return { english: '', chinese: '' };
        const match = summary.match(/(.*?)\s*\((.*?)\)/);
        if (match) {
            return {
                english: match[1].trim(),
                chinese: `(${match[2].trim()})`
            };
        }
        return { english: summary, chinese: '' };
    };
    const { english, chinese } = splitSummary(card.summary);

    // Rule Card Rendering
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
                    backgroundColor: '#e2e8f0', // Soft gray
                    color: '#0f172a',
                    borderRadius: isLargePrint ? '40px' : '24px',
                    border: '4px solid #ffffff',
                    boxShadow: 'inset -6px -6px 12px rgba(0,0,0,0.1), inset 6px 6px 12px rgba(255,255,255,0.8), 4px 8px 16px rgba(0,0,0,0.15)',
                    printColorAdjust: 'exact', 
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                <div 
                    className="text-center shrink-0 force-print-bg"
                    style={{ 
                        padding: isLargePrint ? '16px' : (isMediumPrint ? '12px' : '8px'), 
                        backgroundColor: '#475569',
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
                            <div key={idx} className="flex flex-col border-b-2 border-slate-300/30 border-dashed last:border-0 pb-1 mb-1">
                                <div className={`font-black text-slate-800 ${isLargePrint ? 'text-3xl' : (isMediumPrint ? 'text-xl' : 'text-xs')} drop-shadow-sm`}>{rule.title}</div>
                                <div className={`text-slate-900 font-bold ${isLargePrint ? 'text-2xl mt-1 leading-tight' : (isMediumPrint ? 'text-lg leading-tight' : 'text-[10px] leading-snug')}`}>
                                    {rule.desc}
                                    {rule.title.includes("對決宣告") && (
                                        <span className="text-blue-700 block font-black mt-0.5">例如：對手卡牌顯示「apple (水果)」，你必須搶先喊出「banana」等其他水果！</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    // Regular / Wild Card Rendering
    const mainColor = '#fcfbfa'; // Off-white
    const borderColor = inkSaver ? '#cbd5e1' : card.hex;
    const textColor = '#0f172a'; // slate-900

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
                border: `4px solid ${borderColor}`,
                boxShadow: inkSaver ? 'none' : 'inset -8px -8px 16px rgba(0,0,0,0.05), inset 8px 8px 16px rgba(255,255,255,0.8), 6px 10px 20px rgba(0,0,0,0.15)',
                printColorAdjust: 'exact',
                WebkitPrintColorAdjust: 'exact'
            }}
        >
            {/* Top Area: Large Vocabulary Word (or WILD) */}
            <div 
                className="relative flex flex-col items-center justify-center z-10 force-print-bg px-2"
                style={{
                    height: '30%',
                    backgroundColor: card.isWild ? 'rgba(71, 85, 105, 0.08)' : 'rgba(15, 23, 42, 0.03)',
                    borderBottom: '2px solid rgba(0,0,0,0.05)',
                }}
            >
                <h2 
                    className={`font-sans font-black tracking-wide text-center uppercase leading-none`}
                    style={{ 
                        color: card.isWild ? '#475569' : textColor,
                        fontSize: isLargePrint ? '72px' : (isMediumPrint ? '44px' : '28px'),
                        textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                    }}
                >
                    {card.name}
                </h2>
                {!card.isWild && card.effect && (
                    <span 
                        className={`font-sans font-bold text-stone-500 mt-1`}
                        style={{
                            fontSize: isLargePrint ? '32px' : (isMediumPrint ? '20px' : '12px')
                        }}
                    >
                        ({card.effect})
                    </span>
                )}
            </div>

            {/* Middle Area: SVGs Geometric Shapes */}
            <div 
                className="relative w-full flex items-center justify-center overflow-hidden force-print-bg px-2"
                style={{
                    flex: '1',
                }}
            >
                {card.isWild ? (
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <GeometricShape 
                            shape={card.shape1} 
                            color={card.color1} 
                            numberText={card.number1} 
                            size={isLargePrint ? 'wild-large' : (isMediumPrint ? 'wild-medium' : 'wild')} 
                        />
                        <span 
                            className="font-black text-slate-400 select-none"
                            style={{ fontSize: isLargePrint ? '48px' : (isMediumPrint ? '32px' : '20px') }}
                        >
                            ⚡
                        </span>
                        <GeometricShape 
                            shape={card.shape2} 
                            color={card.color2} 
                            numberText={card.number2} 
                            size={isLargePrint ? 'wild-large' : (isMediumPrint ? 'wild-medium' : 'wild')} 
                        />
                    </div>
                ) : (
                    <GeometricShape 
                        shape={card.shape} 
                        color={card.hex} 
                        numberText={card.value} 
                        size={size} 
                    />
                )}
            </div>

            {/* Bottom Area: Large Category Hint for Duel Opponents */}
            <div 
                className="relative flex flex-col items-center justify-center px-2 py-2 mx-3 mb-3 force-print-bg"
                style={{
                    height: '25%',
                    backgroundColor: card.isWild ? '#f1f5f9' : `${card.hex}15`, // very light shape color background
                    borderRadius: isLargePrint ? '20px' : '12px',
                    border: `2px dashed ${borderColor}80`,
                    zIndex: 20
                }}
            >
                {card.isWild ? (
                    <p 
                        className={`font-sans font-black text-center text-slate-600 leading-tight w-full`}
                        style={{ fontSize: isLargePrint ? '24px' : (isMediumPrint ? '16px' : '10px') }}
                    >
                        {card.effect}
                    </p>
                ) : (
                    <div className="text-center w-full flex flex-col items-center justify-center gap-0.5 leading-tight">
                        <span 
                            className="font-sans font-black tracking-wider block"
                            style={{ 
                                color: card.hex,
                                fontSize: isLargePrint ? '40px' : (isMediumPrint ? '24px' : '16px')
                            }}
                        >
                            {english}
                        </span>
                        <span 
                            className="font-sans font-bold block"
                            style={{ 
                                color: card.hex,
                                opacity: 0.85,
                                fontSize: isLargePrint ? '32px' : (isMediumPrint ? '20px' : '13px')
                            }}
                        >
                            {chinese}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
