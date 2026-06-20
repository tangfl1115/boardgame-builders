import React from 'react';
import { icons } from './Icons';

export const CardBack = ({ size = 'standard', inkSaver = false, versionData }) => {
    const isLargePrint = size === 'large-print';
    const isMediumPrint = size === 'medium';
    
    return (
        <div 
            className={`
                relative flex flex-col items-center justify-center overflow-hidden box-border force-print-bg
                ${isLargePrint ? 'card-large m-0' : (isMediumPrint ? 'card-medium m-0' : 'card-standard m-4 hover:scale-105 transition-transform')}
            `}
            style={{
                width: isLargePrint ? '180mm' : (isMediumPrint ? '90mm' : '64mm'),
                height: isLargePrint ? '250mm' : (isMediumPrint ? '130mm' : '89mm'),
                backgroundColor: inkSaver ? '#f8fafc' : (versionData.backBorder || '#4c1d95'),
                borderRadius: isLargePrint ? '40px' : '24px',
                border: inkSaver ? `4px solid ${versionData.cardBorder || '#cbd5e1'}` : '4px solid rgba(255,255,255,0.3)',
                boxShadow: inkSaver ? 'none' : 'inset -8px -8px 16px rgba(0,0,0,0.2), inset 8px 8px 16px rgba(255,255,255,0.1), 6px 10px 20px rgba(0,0,0,0.2)',
                printColorAdjust: 'exact',
                WebkitPrintColorAdjust: 'exact'
            }}
        >
            <div className={`absolute inset-0 ${inkSaver ? '' : versionData.pattern} opacity-20 force-print-bg`}></div>
            
            {/* Logo in the center */}
            <div 
                className="relative z-10 flex flex-col items-center justify-center rounded-full p-6 shadow-xl force-print-bg"
                style={{
                    backgroundColor: inkSaver ? '#ffffff' : 'rgba(255,255,255,0.1)',
                    border: '4px solid',
                    borderColor: inkSaver ? '#cbd5e1' : 'rgba(255,255,255,0.2)',
                    boxShadow: inkSaver ? 'none' : 'inset 4px 4px 8px rgba(255,255,255,0.1), inset -4px -4px 8px rgba(0,0,0,0.2), 4px 4px 12px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(8px)',
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                <div style={{ color: inkSaver ? '#94a3b8' : 'rgba(255,255,255,0.8)' }}>
                    {icons.Sparkles}
                </div>
                <h2 className={`mt-2 font-sans font-black ${isLargePrint ? 'text-4xl' : (isMediumPrint ? 'text-2xl' : 'text-lg')} text-center leading-tight tracking-widest`}
                    style={{ 
                        color: inkSaver ? '#64748b' : '#ffffff',
                        textShadow: inkSaver ? 'none' : '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                    {(() => {
                        const nameText = versionData.name || '魔藥大師';
                        const spaceIndex = nameText.indexOf(' ');
                        if (spaceIndex !== -1) {
                            const line1 = nameText.substring(0, spaceIndex);
                            const line2 = nameText.substring(spaceIndex + 1);
                            return (
                                <div className="flex flex-col gap-1">
                                    <div>{line1}</div>
                                    <div className={`font-sans font-bold ${isLargePrint ? 'text-2xl' : (isMediumPrint ? 'text-base' : 'text-xs')} opacity-80`}>{line2}</div>
                                </div>
                            );
                        }
                        return nameText;
                    })()}
                </h2>
            </div>
        </div>
    );
};
