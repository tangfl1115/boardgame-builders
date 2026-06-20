// Version: 1.0.0
// Changelog:
// - Initial creation: 星際果林 (Star Grove)，改編自果林 (Grove)
export const versions = {
    'star-grove': {
        id: 'star-grove',
        name: '星際果林 (18張)',
        title: '星際果林 (Star Grove)',
        themeName: '障礙與決策',
        referenceGame: '果林 (Grove)',
        description: '一款 1 人解謎遊戲！比銀河果園更具挑戰性。新增了「隕石阻礙」和「蟲洞」元素，你必須在得分與消除障礙間做決策！',
        cardBorder: '#0f766e', // teal-700
        backBorder: '#134e4a', // teal-900
        cards: [
            {
                id: 'star-R',
                value: 1,
                name: '紅矮星',
                count: 3,
                summary: '紅色恆星 × 3',
                effect: '重疊得分：\n與同類星球重疊，\n每格得 1 分。\n共 3 張。',
                flavorText: '「穩定燃燒著的小恆星，壽命可達萬億年。」',
                imagePath: '/images/star_red.png',
                hex: '#dc2626'
            },
            {
                id: 'star-O',
                value: 2,
                name: '橙色巨星',
                count: 2,
                summary: '橙色恆星 × 2',
                effect: '重疊得分：\n與同類星球重疊，\n每格得 1 分。\n共 2 張。',
                flavorText: '「光焰萬丈，以超高速在星系中穿梭。」',
                imagePath: '/images/star_orange.png',
                hex: '#ea580c'
            },
            {
                id: 'star-Y',
                value: 3,
                name: '黃色太陽',
                count: 2,
                summary: '黃色恆星 × 2',
                effect: '重疊得分：\n與同類星球重疊，\n每格得 1 分。\n共 2 張。',
                flavorText: '「那是宇宙中溫柔的光，照亮了無數行星。」',
                imagePath: '/images/star_yellow.png',
                hex: '#ca8a04'
            },
            {
                id: 'star-Meteor',
                value: 4,
                name: '隕石阻礙',
                count: 1,
                summary: '⚠ 阻礙牌',
                effect: '【特殊】隕石阻礙：\n此牌放置後不計分。\n覆蓋在任何恆星上方時，\n那格無法再計分。',
                flavorText: '「漫遊在星系間的石塊，是所有星際探索者的威脅。」',
                imagePath: '/images/meteor.png',
                hex: '#57534e'
            },
            {
                id: 'star-Wormhole',
                value: 5,
                name: '蟲洞消除',
                count: 1,
                summary: '🌀 工具牌',
                effect: '【特殊】蟲洞消除：\n打出此牌時，\n可以移除場上任意\n1 張隕石阻礙牌。',
                flavorText: '「穿越時空的捷徑，也是消除障礙的唯一辦法。」',
                imagePath: '/images/wormhole.png',
                hex: '#7c3aed'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '將 3 張紅矮星、2 張橙色巨星、2 張黃色太陽、1 張隕石阻礙、1 張蟲洞消除（共 9 張）洗勻作為牌庫。'
            },
            {
                title: '核心規則',
                desc: '與銀河果園相同：每張牌必須覆蓋已有的至少一格，同類星球重疊則得分。'
            },
            {
                title: '特殊規則',
                desc: '隕石阻礙：放在任何位置，覆蓋的方格不計分且無法再疊。\n蟲洞消除：打出時可移除場上一張隕石阻礙牌，恢復那格的計分功能。'
            },
            {
                title: '勝利目標',
                desc: '9 張打完後統計總分（與銀河果園規則相同）。\n★★★ 25 分以上：無與倫比！\n★★ 15-24 分：星際航行家。\n★ 14 分以下：下次再試！'
            }
        ]
    }
};
