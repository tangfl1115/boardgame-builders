// Version: 1.0.0
// Changelog:
// - Initial creation: 粒子獵人 (Particle Hunter)，改編自五夸克 (Pentaquark)
export const versions = {
    'particle-hunter': {
        id: 'particle-hunter',
        name: '粒子獵人 (18張)',
        title: '粒子獵人 (Particle Hunter)',
        themeName: '物理解謎',
        referenceGame: '五夸克 (Pentaquark)',
        description: '一款 1 人的物理科普解謎遊戲！在粒子衰變消失前，拼湊出含有五個夸克的「五夸克複合粒子」，挑戰粒子物理極限！',
        cardBorder: '#4f46e5', // indigo-600
        backBorder: '#312e81', // indigo-900
        cards: [
            {
                id: 'quark-up',
                value: 1,
                name: '上夸克 (u)',
                count: 4,
                summary: '上夸克 × 4',
                effect: '【夸克】上夸克\n帶有 +2/3 電荷。\n可與下夸克組合\n形成質子或中子。\n共 4 張。',
                flavorText: '「最常見的夸克之一，構成了宇宙中大多數物質。」',
                imagePath: '/images/quark_up.png',
                hex: '#dc2626'
            },
            {
                id: 'quark-down',
                value: 2,
                name: '下夸克 (d)',
                count: 4,
                summary: '下夸克 × 4',
                effect: '【夸克】下夸克\n帶有 -1/3 電荷。\n可與上夸克組合\n形成質子或中子。\n共 4 張。',
                flavorText: '「最常見的夸克之一，與上夸克一起構成穩定的物質。」',
                imagePath: '/images/quark_down.png',
                hex: '#2563eb'
            },
            {
                id: 'quark-strange',
                value: 3,
                name: '奇夸克 (s)',
                count: 3,
                summary: '奇夸克 × 3',
                effect: '【夸克】奇夸克\n帶有 -1/3 電荷。\n衰變速度較快，\n需優先使用！\n共 3 張。',
                flavorText: '「奇異性的來源，參與弱交互作用，容易衰變消失。」',
                imagePath: '/images/quark_strange.png',
                hex: '#7c3aed'
            },
            {
                id: 'quark-charm',
                value: 4,
                name: '魅夸克 (c)',
                count: 3,
                summary: '魅夸克 × 3',
                effect: '【夸克】魅夸克\n帶有 +2/3 電荷。\n質量較大，\n拼入複合粒子可加分。\n共 3 張。',
                flavorText: '「1974 年發現時引起物理界震動，是粒子物理的里程碑。」',
                imagePath: '/images/quark_charm.png',
                hex: '#0891b2'
            },
            {
                id: 'quark-bottom',
                value: 5,
                name: '底夸克 (b)',
                count: 2,
                summary: '底夸克 × 2',
                effect: '【夸克】底夸克\n帶有 -1/3 電荷。\n稀有但穩定，\n用於五夸克態必得加分。\n共 2 張。',
                flavorText: '「第三代夸克，在高能對撞機中才能被製造出來。」',
                imagePath: '/images/quark_bottom.png',
                hex: '#059669'
            },
            {
                id: 'quark-top',
                value: 6,
                name: '頂夸克 (t)',
                count: 1,
                summary: '頂夸克 × 1',
                effect: '【稀有夸克】頂夸克\n帶有 +2/3 電荷。\n質量最重的夸克！\n若拼入五夸克態，\n立刻額外得 5 分！\n共 1 張。',
                flavorText: '「1995 年才被發現，是目前已知最重的基本粒子。」',
                imagePath: '/images/quark_top.png',
                hex: '#b45309'
            },
            {
                id: 'particle-gluon',
                value: 7,
                name: '膠子',
                count: 1,
                summary: '傳遞強核力',
                effect: '【工具牌】膠子\n打出此牌時，\n可以讓任意 2 張夸克\n的電荷互相抵消，\n忽略電荷配對限制。\n共 1 張。',
                flavorText: '「傳遞強核力的媒介粒子，讓夸克緊密結合在一起。」',
                imagePath: '/images/particle_gluon.png',
                hex: '#6b7280'
            }
        ],
        rules: [
            {
                title: '遊戲目標',
                desc: '在 18 張牌中，利用各種夸克組合出「五夸克複合粒子」（5 張夸克，總電荷為 +1）。任何奇夸克每回合有 1/4 機率衰變消失！'
            },
            {
                title: '遊戲流程',
                desc: '每回合翻 1 張牌，放入「粒子場」中。選擇將場上的夸克組合成候選粒子，或等待更合適的牌出現。'
            },
            {
                title: '衰變規則',
                desc: '每回合結束前，擲骰（或翻牌）判定：奇夸克是否衰變。奇夸克消失後，所有依賴它的組合也隨之瓦解。'
            },
            {
                title: '計分',
                desc: '成功組合出五夸克態得 10 分。\n含魅夸克：額外 +2 分。\n含底夸克：額外 +3 分。\n含頂夸克：額外 +5 分。\n組合出 2 個五夸克態：額外 +10 分！'
            }
        ]
    }
};
