// Version: 1.1.0
// Changelog:
// - Renamed Tofu Kingdom to Pudding Kingdom (布丁王國).
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
                <h2 className={`mt-2 font-sans font-black ${isLargePrint ? 'text-5xl' : (isMediumPrint ? 'text-3xl' : 'text-xl')} text-center leading-tight tracking-widest`}
                    style={{ 
                        color: inkSaver ? '#64748b' : '#ffffff',
                        textShadow: inkSaver ? 'none' : '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                    {versionData.name ? (
                        <>
                            <div>{versionData.name.split(' ')[0]}</div>
                            <div className={isLargePrint ? 'text-3xl mt-2' : (isMediumPrint ? 'text-xl mt-1' : 'text-xs mt-1')}>{versionData.name.split(' ').slice(1).join(' ')}</div>
                        </>
                    ) : '布丁王國'}
                </h2>
            </div>
        </div>
    );
};
