// Version: 1.0.0
// Changelog:
// - Initial creation: 叢林食物鏈 (Jungle Food Chain)，改編自食物鏈島 (Food Chain Island)
export const versions = {
    'jungle-food-chain': {
        id: 'jungle-food-chain',
        name: '叢林食物鏈 (18張)',
        title: '叢林食物鏈 (Jungle Food Chain)',
        themeName: '弱肉強食',
        referenceGame: '食物鏈島 (Food Chain Island)',
        description: '一款 1 人獨玩的邏輯解謎遊戲！叢林法則就是弱肉強食。規劃正確的獵食順序，讓島上最終只剩下一隻動物存活！',
        cardBorder: '#15803d', // green-700
        backBorder: '#14532d', // green-900
        cards: [
            {
                id: 'animal-0',
                value: 0,
                name: '微生物',
                count: 1,
                summary: '最弱小的分解者',
                effect: '無法主動捕食任何動物。只能被 1-3 號動物吃掉。',
                flavorText: '「雖然肉眼看不見，但卻是整個生態系的基礎。」',
                imagePath: '/images/animal_0.png',
                hex: '#a3a3a3'
            },
            {
                id: 'animal-1',
                value: 1,
                name: '螞蟻',
                count: 1,
                summary: '可吃 0',
                effect: '可以捕食：微生物 (0)。\n可被捕食：2-4 號動物。',
                flavorText: '「數量龐大、組織嚴密，是叢林底層的清道夫。」',
                imagePath: '/images/animal_1.png',
                hex: '#78716c'
            },
            {
                id: 'animal-2',
                value: 2,
                name: '青蛙',
                count: 1,
                summary: '可吃 0-1',
                effect: '可以捕食：微生物 (0)、螞蟻 (1)。\n可被捕食：3-5 號動物。',
                flavorText: '「每到雨天就在池邊高聲鳴叫，享用著豐盛的昆蟲大餐。」',
                imagePath: '/images/animal_2.png',
                hex: '#4ade80'
            },
            {
                id: 'animal-3',
                value: 3,
                name: '蜥蜴',
                count: 1,
                summary: '可吃 0-2',
                effect: '可以捕食：微生物 (0)、螞蟻 (1)、青蛙 (2)。\n可被捕食：4-6 號動物。',
                flavorText: '「在岩石上曬太陽的蜥蜴，用長長的舌頭精準捕捉昆蟲。」',
                imagePath: '/images/animal_3.png',
                hex: '#a3e635'
            },
            {
                id: 'animal-4',
                value: 4,
                name: '蛇',
                count: 1,
                summary: '可吃 1-3',
                effect: '可以捕食：螞蟻 (1)、青蛙 (2)、蜥蜴 (3)。\n可被捕食：5-7 號動物。',
                flavorText: '「悄無聲息地穿梭於草叢間，是伏擊高手。」',
                imagePath: '/images/animal_4.png',
                hex: '#facc15'
            },
            {
                id: 'animal-5',
                value: 5,
                name: '鷹',
                count: 1,
                summary: '可吃 2-4',
                effect: '可以捕食：青蛙 (2)、蜥蜴 (3)、蛇 (4)。\n可被捕食：6-8 號動物。',
                flavorText: '「翱翔在高空，以銳利的眼神鎖定遠方的獵物。」',
                imagePath: '/images/animal_5.png',
                hex: '#fb923c'
            },
            {
                id: 'animal-6',
                value: 6,
                name: '狐狸',
                count: 1,
                summary: '可吃 3-5',
                effect: '可以捕食：蜥蜴 (3)、蛇 (4)、鷹 (5)。\n可被捕食：7-9 號動物。',
                flavorText: '「聰明狡猾的獵手，能用詭計捕捉比自己強的動物。」',
                imagePath: '/images/animal_6.png',
                hex: '#f97316'
            },
            {
                id: 'animal-7',
                value: 7,
                name: '野豬',
                count: 1,
                summary: '可吃 4-6',
                effect: '可以捕食：蛇 (4)、鷹 (5)、狐狸 (6)。\n可被捕食：8-10 號動物。',
                flavorText: '「用堅硬的獠牙和蹄子在叢林中橫衝直撞。」',
                imagePath: '/images/animal_7.png',
                hex: '#a8a29e'
            },
            {
                id: 'animal-8',
                value: 8,
                name: '花豹',
                count: 1,
                summary: '可吃 5-7',
                effect: '可以捕食：鷹 (5)、狐狸 (6)、野豬 (7)。\n可被捕食：9-11 號動物。',
                flavorText: '「花紋美麗的大貓，是叢林中最靈活的頂尖獵手之一。」',
                imagePath: '/images/animal_8.png',
                hex: '#fbbf24'
            },
            {
                id: 'animal-9',
                value: 9,
                name: '棕熊',
                count: 1,
                summary: '可吃 6-8',
                effect: '可以捕食：狐狸 (6)、野豬 (7)、花豹 (8)。\n可被捕食：10-12 號動物。',
                flavorText: '「體型龐大、力量驚人，冬眠前會大量進食儲存脂肪。」',
                imagePath: '/images/animal_9.png',
                hex: '#92400e'
            },
            {
                id: 'animal-10',
                value: 10,
                name: '獅子',
                count: 1,
                summary: '可吃 7-9',
                effect: '可以捕食：野豬 (7)、花豹 (8)、棕熊 (9)。\n可被捕食：11-13 號動物。',
                flavorText: '「萬獸之王，在大草原上統治著整個獸群。」',
                imagePath: '/images/animal_10.png',
                hex: '#ca8a04'
            },
            {
                id: 'animal-11',
                value: 11,
                name: '大象',
                count: 1,
                summary: '可吃 8-10',
                effect: '可以捕食：花豹 (8)、棕熊 (9)、獅子 (10)。\n可被捕食：12-14 號動物。',
                flavorText: '「地球上最大的陸生動物，連獅子都要避其鋒芒。」',
                imagePath: '/images/animal_11.png',
                hex: '#71717a'
            },
            {
                id: 'animal-12',
                value: 12,
                name: '鯊魚',
                count: 1,
                summary: '可吃 9-11',
                effect: '可以捕食：棕熊 (9)、獅子 (10)、大象 (11)。\n可被捕食：13-15 號動物。',
                flavorText: '「海洋中的終極殺手，億萬年來幾乎未曾改變。」',
                imagePath: '/images/animal_12.png',
                hex: '#0284c7'
            },
            {
                id: 'animal-13',
                value: 13,
                name: '暴龍',
                count: 1,
                summary: '可吃 10-12',
                effect: '可以捕食：獅子 (10)、大象 (11)、鯊魚 (12)。\n可被捕食：14-16 號動物。',
                flavorText: '「史前最可怕的陸地掠食者，傳說中的恐龍之王。」',
                imagePath: '/images/animal_13.png',
                hex: '#16a34a'
            },
            {
                id: 'animal-14',
                value: 14,
                name: '翼龍',
                count: 1,
                summary: '可吃 11-13',
                effect: '可以捕食：大象 (11)、鯊魚 (12)、暴龍 (13)。\n可被捕食：15-17 號動物。',
                flavorText: '「展翅翺翔於遠古天空的巨型爬行類，俯衝速度極快。」',
                imagePath: '/images/animal_14.png',
                hex: '#7c3aed'
            },
            {
                id: 'animal-15',
                value: 15,
                name: '巨鷹',
                count: 1,
                summary: '可吃 12-14',
                effect: '可以捕食：鯊魚 (12)、暴龍 (13)、翼龍 (14)。\n可被捕食：16-17 號動物。',
                flavorText: '「傳說中能抓起大象的神話之鳥，掌控著天空。」',
                imagePath: '/images/animal_15.png',
                hex: '#b45309'
            },
            {
                id: 'animal-16',
                value: 16,
                name: '海怪',
                count: 1,
                summary: '可吃 13-15',
                effect: '可以捕食：暴龍 (13)、翼龍 (14)、巨鷹 (15)。\n可被捕食：17 號動物。',
                flavorText: '「深藏在最深黑暗的海底，是神話中最古老的生物。」',
                imagePath: '/images/animal_16.png',
                hex: '#0e7490'
            },
            {
                id: 'animal-17',
                value: 17,
                name: '遠古龍',
                count: 1,
                summary: '最強！可吃 14-16',
                effect: '可以捕食：翼龍 (14)、巨鷹 (15)、海怪 (16)。\n無法被任何動物捕食。',
                flavorText: '「宇宙最古老的生命體，其他生命都只是它眼中的塵埃。」',
                imagePath: '/images/animal_17.png',
                hex: '#9f1239'
            }
        ],
        rules: [
            {
                title: '遊戲目標',
                desc: '洗勻 18 張動物卡，排成 4×4 的網格（剩 2 張移出）。規劃出完美的獵食順序，讓叢林中最終只剩 1 隻動物！'
            },
            {
                title: '捕食規則',
                desc: '每隻動物可以捕食相鄰（上下左右）且數字比自己小 1-3 點的動物。捕食後，被吃掉的動物牌移除。'
            },
            {
                title: '行動流程',
                desc: '選擇一隻動物，讓牠捕食一隻相鄰的目標動物，然後移動到目標的位置。獵食者數字必須大於獵物 1-3 點。'
            },
            {
                title: '勝利/失敗',
                desc: '剩餘的動物無法再互相捕食時，遊戲結束。\n★★★ 只剩 1 隻：完美！\n★★ 只剩 2 隻：優秀。\n★ 3 隻以上：失敗，請重新挑戰！'
            }
        ]
    }
};
