import React from 'react';

export const CardBack = ({ size = 'standard', inkSaver = false, versionData }) => {
    const isLargePrint = size === 'large-print';
    const isMediumPrint = size === 'medium';
    
    return (
        <div 
            className={`
                relative flex flex-col items-center justify-center overflow-hidden shadow-xl box-border force-print-bg
                ${isLargePrint ? 'card-large m-0' : (isMediumPrint ? 'card-medium m-0' : 'card-standard m-4 hover:scale-105 transition-transform')}
                rounded-2xl
            `}
            style={{
                width: isLargePrint ? '180mm' : (isMediumPrint ? '90mm' : '64mm'),
                height: isLargePrint ? '250mm' : (isMediumPrint ? '130mm' : '89mm'),
                backgroundColor: versionData.backColor,
                printColorAdjust: 'exact',
                WebkitPrintColorAdjust: 'exact'
            }}
        >
            <div className={`absolute inset-0 ${inkSaver ? '' : versionData.pattern} opacity-50 force-print-bg`}></div>
        </div>
    );
};
