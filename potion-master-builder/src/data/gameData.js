export const versions = {
    'potion-master': {
        id: 'potion-master',
        name: "魔藥大師",
        title: "魔藥大師 (Potion Master)",
        themeName: "魔法煉金",
        referenceGame: "種豆 (Bohnanza)",
        description: "在魔法世界中，巫師們必須依照材料拿到的順序，將配方準確地投入大釜熬煮，才能煉成價值連城的魔藥！",
        cardBorder: "#4c1d95", // Deep purple
        backBorder: "#2e1065", // Darker purple
        cards: [
            {
                id: 'mat-1',
                value: 24,
                name: "發光蘑菇",
                count: 24,
                summary: "4=1, 7=2, 10=3, 12=4",
                effect: "金幣換算：\n4 張 = 1 幣\n7 張 = 2 幣\n10 張 = 3 幣\n12 張 = 4 幣",
                flavorText: "「在幽暗的地窖中散發著奇異的螢光。」",
                imagePath: '/images/mushroom_1781597734811.png',
                hexColor: '#a855f7' // purple-500
            },
            {
                id: 'mat-2',
                value: 22,
                name: "曼德拉草",
                count: 22,
                summary: "4=1, 6=2, 8=3, 11=4",
                effect: "金幣換算：\n4 張 = 1 幣\n6 張 = 2 幣\n8 張 = 3 幣\n11 張 = 4 幣",
                flavorText: "「拔出來時的尖叫聲能讓人暈厥。」",
                imagePath: '/images/mandrake_1781599760034.png',
                hexColor: '#10b981' // emerald-500
            },
            {
                id: 'mat-3',
                value: 20,
                name: "龍角粉末",
                count: 20,
                summary: "4=1, 6=2, 8=3, 10=4",
                effect: "金幣換算：\n4 張 = 1 幣\n6 張 = 2 幣\n8 張 = 3 幣\n10 張 = 4 幣",
                flavorText: "「極度稀有且極度危險的強效催化劑。」",
                imagePath: '/images/dragon_horn_1781599778729.png',
                hexColor: '#f97316' // orange-500
            },
            {
                id: 'mat-4',
                value: 18,
                name: "鳳凰羽毛",
                count: 18,
                summary: "3=1, 6=2, 8=3, 9=4",
                effect: "金幣換算：\n3 張 = 1 幣\n6 張 = 2 幣\n8 張 = 3 幣\n9 張 = 4 幣",
                flavorText: "「即使脫離了本體，依舊帶著溫暖的觸感。」",
                imagePath: '/images/phoenix_feather_1781599791724.png',
                hexColor: '#ef4444' // red-500
            },
            {
                id: 'mat-5',
                value: 16,
                name: "史萊姆黏液",
                count: 16,
                summary: "3=1, 5=2, 7=3, 8=4",
                effect: "金幣換算：\n3 張 = 1 幣\n5 張 = 2 幣\n7 張 = 3 幣\n8 張 = 4 幣",
                flavorText: "「黏糊糊的，但卻是良好的融合劑。」",
                imagePath: '/images/slime_jelly_1781599805306.png',
                hexColor: '#84cc16' // lime-500
            },
            {
                id: 'mat-6',
                value: 14,
                name: "人魚眼淚",
                count: 14,
                summary: "3=1, 5=2, 6=3, 7=4",
                effect: "金幣換算：\n3 張 = 1 幣\n5 張 = 2 幣\n6 張 = 3 幣\n7 張 = 4 幣",
                flavorText: "「如珍珠般純淨，蘊含著深海的哀愁。」",
                imagePath: '/images/mermaid_tear_1781599819982.png',
                hexColor: '#06b6d4' // cyan-500
            },
            {
                id: 'mat-7',
                value: 12,
                name: "獨角獸尾毛",
                count: 12,
                summary: "2=1, 4=2, 5=3, 6=4",
                effect: "金幣換算：\n2 張 = 1 幣\n4 張 = 2 幣\n5 張 = 3 幣\n6 張 = 4 幣",
                flavorText: "「純潔魔法的象徵，具有強大的保護力。」",
                imagePath: '/images/unicorn_hair_1781599836450.png',
                hexColor: '#f472b6' // pink-400
            },
            {
                id: 'mat-8',
                value: 10,
                name: "精靈星塵",
                count: 10,
                summary: "2=1, 3=2, 4=3, 5=4",
                effect: "金幣換算：\n2 張 = 1 幣\n3 張 = 2 幣\n4 張 = 3 幣\n5 張 = 4 幣",
                flavorText: "「能在黑暗中指引方向的閃耀粉末。」",
                imagePath: '/images/fairy_stardust_1781599850244.png',
                hexColor: '#eab308' // yellow-500
            },
            {
                id: 'mat-9',
                value: 8,
                name: "吸血鬼尖牙",
                count: 8,
                summary: "2=1, 3=2, 4=3, 5=4",
                effect: "金幣換算：\n2 張 = 1 幣\n3 張 = 2 幣\n4 張 = 3 幣\n5 張 = 4 幣",
                flavorText: "「銳利無比，帶有微微的詛咒氣息。」",
                imagePath: '/images/vampire_fang_1781599864499.png',
                hexColor: '#991b1b' // red-800
            },
            {
                id: 'mat-10',
                value: 6,
                name: "海妖鱗片",
                count: 6,
                summary: "2=1, 3=2, 4=3",
                effect: "金幣換算：\n2 張 = 1 幣\n3 張 = 2 幣\n4 張 = 3 幣",
                flavorText: "「聽說只要刮擦就會發出迷幻的歌聲。」",
                imagePath: '/images/siren_scale_1781599888664.png',
                hexColor: '#3b82f6' // blue-500
            },
            {
                id: 'mat-11',
                value: 4,
                name: "賢者之石",
                count: 4,
                summary: "2=2, 3=3, 4=4",
                effect: "金幣換算：\n2 張 = 2 幣\n3 張 = 3 幣\n4 張 = 4 幣",
                flavorText: "「煉金術的最高傑作，傳說能點石成金。」",
                imagePath: '/images/philosophers_stone_1781599900135.png',
                hexColor: '#b45309' // amber-700
            }
        ],
        rules: [
            {
                title: "遊戲目標",
                desc: "將手中的材料按順序投入大釜熬煮，收成換取最多金幣者獲勝！"
            },
            {
                title: "禁忌法則",
                desc: "絕對不可改變手牌的順序！新抽的牌必須放在最後方。"
            },
            {
                title: "回合流程",
                desc: "1. 投入第一張牌到大釜 (可選擇是否加投第二張)。\n2. 翻開兩張公用牌，與他人進行材料交易。\n3. 將交易獲得的材料全部投入大釜。\n4. 從牌庫抽取 3 張牌放在手牌最後方。"
            },
            {
                title: "魔法大釜",
                desc: "每人起始有 2 個大釜。每個大釜只能熬煮一種材料。可隨時收成換取金幣。可花 3 枚金幣購買第 3 個大釜。"
            }
        ]
    }
};
