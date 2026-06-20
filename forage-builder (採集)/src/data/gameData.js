// Version: 1.0.0
// Changelog:
// - Initial creation: 宇宙採集 (Cosmic Forage)，改編自採集 (Forage)
export const versions = {
    'cosmic-forage': {
        id: 'cosmic-forage',
        name: '宇宙採集 (18張)',
        title: '宇宙採集 (Cosmic Forage)',
        themeName: '季節與環境',
        referenceGame: '採集 (Forage)',
        description: '宇宙採集是三部曲的最終章！新增了季節效果與天氣干擾，讓星際排列策略更加複雜，是最高難度的疊疊樂挑戰！',
        cardBorder: '#0e7490', // cyan-700
        backBorder: '#164e63', // cyan-900
        cards: [
            {
                id: 'cosmic-R',
                value: 1,
                name: '紅矮星',
                count: 2,
                summary: '紅色恆星 × 2',
                effect: '重疊得分：\n與同類星球重疊，\n每格得 1 分。\n共 2 張。',
                flavorText: '「千億年間始終如一地燃燒，永不熄滅。」',
                imagePath: '/images/cosmic_red.png',
                hex: '#dc2626'
            },
            {
                id: 'cosmic-O',
                value: 2,
                name: '橙色巨星',
                count: 2,
                summary: '橙色恆星 × 2',
                effect: '重疊得分：\n與同類星球重疊，\n每格得 1 分。\n共 2 張。',
                flavorText: '「以驚人的速度自轉，表面噴出巨大的太陽風暴。」',
                imagePath: '/images/cosmic_orange.png',
                hex: '#ea580c'
            },
            {
                id: 'cosmic-Y',
                value: 3,
                name: '黃色太陽',
                count: 2,
                summary: '黃色恆星 × 2',
                effect: '重疊得分：\n與同類星球重疊，\n每格得 1 分。\n共 2 張。',
                flavorText: '「暖黃色的光照耀萬物，是生命起源的搖籃。」',
                imagePath: '/images/cosmic_yellow.png',
                hex: '#ca8a04'
            },
            {
                id: 'cosmic-Season',
                value: 4,
                name: '季節轉換',
                count: 1,
                summary: '🍂 效果牌',
                effect: '【特殊】季節轉換：\n此牌放下時，\n所有恆星牌同時\n順時針旋轉 90°。',
                flavorText: '「宇宙的季節更替，改變了所有星體的軌跡。」',
                imagePath: '/images/season.png',
                hex: '#b45309'
            },
            {
                id: 'cosmic-Storm',
                value: 5,
                name: '星際風暴',
                count: 1,
                summary: '⚡ 危機牌',
                effect: '【特殊】星際風暴：\n從場上隨機選一張牌，\n移動到與其相鄰的\n任意空白位置。',
                flavorText: '「可怕的宇宙風暴席捲一切，無人能夠倖免。」',
                imagePath: '/images/storm.png',
                hex: '#4338ca'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '將 2 張紅矮星、2 張橙色巨星、2 張黃色太陽、1 張季節轉換、1 張星際風暴（共 8 張）洗勻，加上隨機 1 張（共 9 張）作為牌庫。'
            },
            {
                title: '核心規則',
                desc: '與銀河果園相同：每張牌必須覆蓋已有的至少一格，同類星球重疊則得分。'
            },
            {
                title: '特殊規則',
                desc: '季節轉換：放下後所有現有恆星牌同時旋轉 90°，可能打開新的重疊機會。\n星際風暴：可移動一張已放的牌到相鄰空白處，調整最終佈局。'
            },
            {
                title: '勝利目標',
                desc: '9 張打完後統計總分（規則同前）。\n★★★ 22 分以上：宇宙之神！\n★★ 13-21 分：深空探索者。\n★ 12 分以下：宇宙很殘酷，再試一次！'
            }
        ]
    }
};
