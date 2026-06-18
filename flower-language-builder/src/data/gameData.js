// Version: 1.0.0
// Changelog:
// - Initial creation: 花語密語 (Floral Code)，改編自花之語 (Tussie Mussie)
export const versions = {
    'floral-code': {
        id: 'floral-code',
        name: '花語密語 (18張)',
        title: '花語密語 (Floral Code)',
        themeName: '我分你選',
        referenceGame: '花之語 (Tussie Mussie)',
        description: '一款 2-4 人的「我分你選」博弈遊戲！每回合，你摸 2 朵花，1 張蓋 1 張開，讓對手選走 1 張。誰的花束最值錢？',
        cardBorder: '#be185d', // pink-700
        backBorder: '#831843', // pink-900
        cards: [
            {
                id: 'flower-rose',
                value: 1,
                name: '玫瑰',
                count: 3,
                summary: '★ 花束加 2 分',
                effect: '【收藏加分】\n計分時，花束中每有\n一朵玫瑰，\n立即加 2 分。\n共 3 張。',
                flavorText: '「愛的象徵，花束中最尊貴的花。」',
                imagePath: '/images/flower_rose.png',
                hex: '#dc2626'
            },
            {
                id: 'flower-lily',
                value: 2,
                name: '百合',
                count: 3,
                summary: '每 2 朵百合 +3 分',
                effect: '【成對加分】\n計分時，花束中每有\n2 朵百合，\n加 3 分。\n共 3 張。',
                flavorText: '「純潔雅緻，2 朵百合在一起更顯高貴。」',
                imagePath: '/images/flower_lily.png',
                hex: '#7dd3fc'
            },
            {
                id: 'flower-lavender',
                value: 3,
                name: '薰衣草',
                count: 3,
                summary: '相鄰花種+1分',
                effect: '【連結加分】\n計分時，與薰衣草相鄰\n擺放的不同花種，\n各加 1 分。\n共 3 張。',
                flavorText: '「紫色的薰衣草為其他花朵帶來額外的芬芳。」',
                imagePath: '/images/flower_lavender.png',
                hex: '#a78bfa'
            },
            {
                id: 'flower-sunflower',
                value: 4,
                name: '向日葵',
                count: 3,
                summary: '花束中最多者加分',
                effect: '【多數加分】\n計分時，你花束中\n數量最多的一種花，\n每朵加 1.5 分。\n共 3 張。',
                flavorText: '「總朝向太陽生長，象徵著執著與熱情。」',
                imagePath: '/images/flower_sunflower.png',
                hex: '#ca8a04'
            },
            {
                id: 'flower-cherry',
                value: 5,
                name: '櫻花',
                count: 3,
                summary: '與其他人比較加分',
                effect: '【比較加分】\n計分時，你的花束中\n若有最多朵或最少朵，\n各加 2 分。\n共 3 張。',
                flavorText: '「轉瞬即逝的美，無論最多還是最少都令人驚艷。」',
                imagePath: '/images/flower_cherry.png',
                hex: '#f9a8d4'
            },
            {
                id: 'flower-daisy',
                value: 6,
                name: '雛菊',
                count: 2,
                summary: '可以配對換分',
                effect: '【特殊能力】\n持有此牌時，\n可放棄此牌換取\n手中任意 1 張蓋著的牌\n翻開查看。\n共 2 張。',
                flavorText: '「親切平易的雛菊，擁有偷看情報的神奇能力。」',
                imagePath: '/images/flower_daisy.png',
                hex: '#fbbf24'
            },
            {
                id: 'flower-orchid',
                value: 7,
                name: '蘭花',
                count: 1,
                summary: '★★ 花束加 5 分',
                effect: '【稀有加分】\n計分時，花束中有\n此朵蘭花，\n立即加 5 分！\n全場僅此 1 張。',
                flavorText: '「世間罕見的蘭花，擁有它是無上的榮耀。」',
                imagePath: '/images/flower_orchid.png',
                hex: '#9333ea'
            }
        ],
        rules: [
            {
                title: '遊戲目標',
                desc: '輪流用「我分你選」的方式收集花朵，最終花束計分最高者獲勝！'
            },
            {
                title: '我分你選',
                desc: '輪到你時，從牌庫摸 2 張牌。你決定哪 1 張蓋著（對手不能看）、哪 1 張翻開，展示給對手看。對手選走 1 張，你拿走另 1 張。'
            },
            {
                title: '花束收集',
                desc: '你選走的牌放入自己的「花束」（手牌）。所有玩家輪流進行，直到牌庫抽完為止。'
            },
            {
                title: '計分',
                desc: '牌庫抽完後，所有人翻開花束並依各花牌的效果計分。分數最高者獲得這局的勝利！'
            }
        ]
    }
};
