import React from 'react';
import { icons } from './Icons';

// Helper to render caret notation exponents nicely as superscripts
export const renderMathText = (text) => {
    if (!text) return '';
    
    // 1. Replace * with ×
    let cleanText = text.replace(/\*/g, '×');

    // 2. Parse fractions: (number or ?)/(number) with optional spaces -> vertical fraction JSX
    const fractionRegex = /(\d+|\?)\s*\/\s*(\d+)/;
    let parts = [cleanText];

    const processParts = (partsList, regex, renderFn) => {
        const result = [];
        partsList.forEach(part => {
            if (typeof part !== 'string') {
                result.push(part);
                return;
            }
            let currentStr = part;
            let match;
            while ((match = regex.exec(currentStr)) !== null) {
                const matchIndex = match.index;
                if (matchIndex > 0) {
                    result.push(currentStr.substring(0, matchIndex));
                }
                result.push(renderFn(match, result.length));
                currentStr = currentStr.substring(matchIndex + match[0].length);
                regex.lastIndex = 0;
            }
            if (currentStr) {
                result.push(currentStr);
            }
        });
        return result;
    };

    // Apply fraction parser
    parts = processParts(parts, fractionRegex, (match, key) => {
        const numerator = match[1];
        const denominator = match[2];
        return (
            <span key={`frac-${key}`} className="inline-flex flex-col items-center justify-center align-middle mx-0.5" style={{ lineHeight: 1.1, verticalAlign: '-0.25em' }}>
                <span className="text-[0.8em]" style={{ borderBottom: '1.5px solid currentColor', padding: '0 2px' }}>{numerator}</span>
                <span className="text-[0.8em]" style={{ padding: '0 2px' }}>{denominator}</span>
            </span>
        );
    });

    // Replace any remaining division slashes in string parts with ÷
    parts = parts.map(part => {
        if (typeof part === 'string') {
            return part.replace(/\//g, '÷');
        }
        return part;
    });

    // 3. Parse exponents: (base)^(exponent or ?) -> superscript JSX
    const exponentRegex = /(\d+|[a-zA-Z]+|\([\w\d+-]+\))\^(\d+|[a-zA-Z]+|\([\w\d+-]+\)|\?)/;
    parts = processParts(parts, exponentRegex, (match, key) => {
        const base = match[1];
        const exponent = match[2];
        return (
            <span key={`exp-${key}`}>
                {base}
                <sup style={{ fontSize: '0.65em', verticalAlign: 'super', position: 'relative', top: '-0.25em' }}>
                    {exponent}
                </sup>
            </span>
        );
    });

    return parts;
};

export const splitMathQuestion = (text) => {
    if (!text) return { part1: '', part2: null };
    
    // Check for '時，' first
    if (text.includes('時，')) {
        const index = text.indexOf('時，');
        return {
            part1: text.substring(0, index + 1), // includes '時'
            part2: text.substring(index + 2) // after '，'
        };
    }
    
    // Find last comma (English or Chinese) that is OUTSIDE of parentheses to avoid splitting coordinates like (-1, -5)
    let depth = 0;
    for (let i = text.length - 1; i >= 0; i--) {
        const char = text[i];
        if (char === ')' || char === '）') {
            depth++;
        } else if (char === '(' || char === '（') {
            depth--;
        } else if ((char === ',' || char === '，') && depth === 0) {
            // Found a valid split comma outside of parentheses!
            return {
                part1: text.substring(0, i),
                part2: text.substring(i + 1)
            };
        }
    }
    
    return { part1: text, part2: null };
};

export const renderCardTitle = (text, textThemeColor, isLargePrint, isMediumPrint) => {
    const { part1, part2 } = splitMathQuestion(text);
    
    if (!part2) {
        return (
            <h2 
                className="font-sans font-black tracking-wide text-center uppercase flex items-center justify-center flex-wrap gap-x-1"
                style={{ 
                    color: textThemeColor,
                    fontSize: isLargePrint ? '68px' : (isMediumPrint ? '40px' : '24px'),
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1.2
                }}
            >
                {renderMathText(part1)}
            </h2>
        );
    }
    
    return (
        <div className="flex flex-col items-center justify-center w-full leading-tight select-none">
            {/* Part 1: Conditions (enlarged font size for readability, e.g. 20px) */}
            <div 
                className="font-sans font-bold tracking-wide text-center uppercase flex items-center justify-center flex-wrap gap-x-1 opacity-90"
                style={{ 
                    color: textThemeColor,
                    fontSize: isLargePrint ? '54px' : (isMediumPrint ? '32px' : '20px'),
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2px'
                }}
            >
                {renderMathText(part1)}
            </div>
            {/* Part 2: Actual Question (normal bold font size) */}
            <h2 
                className="font-sans font-black tracking-wide text-center uppercase flex items-center justify-center flex-wrap gap-x-1"
                style={{ 
                    color: textThemeColor,
                    fontSize: isLargePrint ? '68px' : (isMediumPrint ? '40px' : '24px'),
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {renderMathText(part2)}
            </h2>
        </div>
    );
};

// SVG Geometric Shape Renderer
export const GeometricShape = ({ shape, color, numberText, size = 'standard' }) => {
    // Sizes enlarged 10% for better shape identification at a distance
    let width = 94;
    let height = 94;
    if (size === 'large-print') {
        width = 198;
        height = 198;
    } else if (size === 'medium') {
        width = 132;
        height = 132;
    } else if (size === 'wild') {
        width = 59;
        height = 59;
    } else if (size === 'wild-medium') {
        width = 88;
        height = 88;
    } else if (size === 'wild-large') {
        width = 132;
        height = 132;
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

    const isReadVersion = version && version.includes('read');
    
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
        text2 = ''; // 數學版卡片正面不顯示答案
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
                {renderCardTitle(text1, textThemeColor, isLargePrint, isMediumPrint)}
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
                {renderCardTitle(text1, textThemeColor, isLargePrint, isMediumPrint)}
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
