// Version: 1.0.0
// Changelog:
// - Initial creation: 銀河果園 (Galaxy Orchard)，改編自果園 (Orchard)
export const versions = {
    'galaxy-orchard': {
        id: 'galaxy-orchard',
        name: '銀河果園 (18張)',
        title: '銀河果園 (Galaxy Orchard)',
        themeName: '宇宙疊疊樂',
        referenceGame: '果園 (Orchard)',
        description: '一款 1 人的單人解謎遊戲！從 18 張星球牌中取 9 張，依序堆疊擺放，讓相同星球重疊以獲得分數，挑戰最高紀錄！',
        cardBorder: '#4c1d95', // violet-900
        backBorder: '#2e1065', // violet-950
        cards: [
            {
                id: 'planet-R',
                value: 1,
                name: '紅矮星',
                count: 3,
                summary: '紅色 × 3',
                effect: '堆疊規則：\n與另一張紅矮星重疊時，\n每個重疊方格得 1 分。\n共有 3 張此牌。',
                flavorText: '「宇宙中最常見的恆星，壽命卻是所有恆星中最長的。」',
                imagePath: '/images/planet_red.png',
                hex: '#dc2626'
            },
            {
                id: 'planet-O',
                value: 2,
                name: '橙色巨星',
                count: 2,
                summary: '橙色 × 2',
                effect: '堆疊規則：\n與另一張橙色巨星重疊時，\n每個重疊方格得 1 分。\n共有 2 張此牌。',
                flavorText: '「體積龐大、光度明亮，是夜空中最耀眼的天體之一。」',
                imagePath: '/images/planet_orange.png',
                hex: '#ea580c'
            },
            {
                id: 'planet-Y',
                value: 3,
                name: '黃色太陽',
                count: 2,
                summary: '黃色 × 2',
                effect: '堆疊規則：\n與另一張黃色太陽重疊時，\n每個重疊方格得 1 分。\n共有 2 張此牌。',
                flavorText: '「我們的母星，孕育了地球上所有的生命。」',
                imagePath: '/images/planet_yellow.png',
                hex: '#ca8a04'
            },
            {
                id: 'planet-G',
                value: 4,
                name: '翠綠星球',
                count: 1,
                summary: '綠色 × 1',
                effect: '堆疊規則：\n與另一張翠綠星球重疊時，\n每個重疊方格得 1 分。\n共有 1 張此牌。',
                flavorText: '「外星植被覆蓋整個星球表面，散發著迷幻的翠綠光芒。」',
                imagePath: '/images/planet_green.png',
                hex: '#16a34a'
            },
            {
                id: 'planet-B',
                value: 5,
                name: '藍色氣態巨星',
                count: 1,
                summary: '藍色 × 1',
                effect: '堆疊規則：\n與另一張藍色氣態巨星重疊時，\n每個重疊方格得 1 分。\n共有 1 張此牌。',
                flavorText: '「由藍色甲烷雲構成，溫度極低，卻美得令人窒息。」',
                imagePath: '/images/planet_blue.png',
                hex: '#2563eb'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '將 3 張紅矮星、2 張橙色巨星、2 張黃色太陽、1 張翠綠星球、1 張藍色氣態巨星（共 9 張）洗勻後疊成牌庫。'
            },
            {
                title: '打牌規則',
                desc: '翻開牌庫頂端的一張牌，放在桌上任意位置（可與現有牌重疊），但每張新牌必須至少覆蓋到場上已有的一格。'
            },
            {
                title: '計分',
                desc: '如果打出的牌與場上同類型的星球重疊，那些重疊的方格各得 1 分。'
            },
            {
                title: '勝利目標',
                desc: '9 張打完後統計總分。\n★★★ 25 分以上：宇宙大師！\n★★ 15-24 分：星際探索家。\n★ 14 分以下：繼續加油！'
            }
        ]
    }
};
