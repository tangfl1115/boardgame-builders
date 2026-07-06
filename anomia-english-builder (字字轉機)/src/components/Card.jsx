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

    const safeText = numberText || '';
    const textStyle = {
        fontFamily: 'sans-serif',
        fontWeight: '900',
        fontSize: safeText.length > 5 ? '13px' : '17px',
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
                {safeText.toUpperCase()}
            </text>
        </svg>
    );
};

export const Card = ({ card, size = 'standard', inkSaver = false, version }) => {
    const isLargePrint = size === 'large-print';
    const isMediumPrint = size === 'medium';
    
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
                    backgroundColor: '#e2e8f0', // Soft slate gray
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    // Split Category text Helper
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

    const isReadVersion = version === 'anomia-read' || version === 'anomia-read-int';
    
    // Double-sided text selection
    let text1 = '';
    let text2 = '';
    let textThemeColor = card.hex;

    if (card.isWild) {
        text1 = 'WILD CARD';
        text2 = '(萬能牌)';
        textThemeColor = '#475569';
    } else if (isReadVersion) {
        text1 = card.name;
        text2 = card.effect ? `(${card.effect})` : '';
    } else {
        const { english, chinese } = splitSummary(card.summary);
        text1 = english;
        text2 = chinese;
    }

    const mainColor = '#fcfbfa'; // Off-white
    const borderColor = inkSaver ? '#cbd5e1' : (card.isWild ? '#475569' : card.hex);
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
            {/* Top Area: Text (Normal) */}
            <div 
                className="relative flex flex-col items-center justify-center z-10 force-print-bg px-2 gap-0.5 leading-tight"
                style={{
                    height: '35%',
                    backgroundColor: 'rgba(15, 23, 42, 0.02)',
                    borderBottom: '1px solid rgba(0,0,0,0.03)',
                }}
            >
                <h2 
                    className="font-sans font-black tracking-wide text-center uppercase block"
                    style={{ 
                        color: textThemeColor,
                        fontSize: isLargePrint ? '68px' : (isMediumPrint ? '40px' : '24px'),
                        textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                    }}
                >
                    {text1}
                </h2>
                {text2 && (
                    <span 
                        className="font-sans font-bold block"
                        style={{
                            color: textThemeColor,
                            opacity: 0.85,
                            fontSize: isLargePrint ? '48px' : (isMediumPrint ? '30px' : '18px')
                        }}
                    >
                        {text2}
                    </span>
                )}
            </div>

            {/* Middle Area: SVGs Geometric Shapes */}
            <div 
                className="relative w-full flex items-center justify-center overflow-hidden force-print-bg px-2"
                style={{
                    height: '30%',
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

            {/* Bottom Area: Text (Rotated 180 Degrees) */}
            <div 
                className="relative flex flex-col items-center justify-center z-10 force-print-bg px-2 gap-0.5 leading-tight rotate-180 transform"
                style={{
                    height: '35%',
                    backgroundColor: 'rgba(15, 23, 42, 0.02)',
                    borderTop: '1px solid rgba(0,0,0,0.03)',
                }}
            >
                <h2 
                    className="font-sans font-black tracking-wide text-center uppercase block"
                    style={{ 
                        color: textThemeColor,
                        fontSize: isLargePrint ? '68px' : (isMediumPrint ? '40px' : '24px'),
                        textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                    }}
                >
                    {text1}
                </h2>
                {text2 && (
                    <span 
                        className="font-sans font-bold block"
                        style={{
                            color: textThemeColor,
                            opacity: 0.85,
                            fontSize: isLargePrint ? '48px' : (isMediumPrint ? '30px' : '18px')
                        }}
                    >
                        {text2}
                    </span>
                )}
            </div>
        </div>
    );
};
