// Version: 1.0.0
// Changelog:
// - Initial creation: 星際拓荒 (Space Pioneer)，改編自環形馬車 (Circle the Wagons)
export const versions = {
    'space-pioneer': {
        id: 'space-pioneer',
        name: '星際拓荒 (18張)',
        title: '星際拓荒 (Space Pioneer)',
        themeName: '卡牌輪抽競速',
        referenceGame: '環形馬車 (Circle the Wagons)',
        description: '一款 2 人的快速拼圖輪抽遊戲！在環形軌道上輪流挑選星際領地牌，拼出自己的星際版圖。背面是計分目標，正面是領地！',
        cardBorder: '#1e3a8a', // blue-900
        backBorder: '#0f172a', // slate-950
        cards: [
            {
                id: 'territory-mining',
                value: 1,
                name: '採礦星球',
                count: 4,
                summary: '礦石 × 4 張',
                effect: '【領地】採礦星球\n每塊採礦星球\n與工廠星球相鄰時，\n計分 +1。',
                flavorText: '「豐富的礦藏讓這顆星球成為整個星系最重要的資源地。」',
                imagePath: '/images/territory_mining.png',
                hex: '#92400e'
            },
            {
                id: 'territory-factory',
                value: 2,
                name: '工廠星球',
                count: 4,
                summary: '工廠 × 4 張',
                effect: '【領地】工廠星球\n最大連續工廠區塊，\n每塊計分 +1.5。',
                flavorText: '「機器轟鳴不停，將採礦星球運來的礦石轉化為各種商品。」',
                imagePath: '/images/territory_factory.png',
                hex: '#374151'
            },
            {
                id: 'territory-colony',
                value: 3,
                name: '殖民星球',
                count: 4,
                summary: '殖民地 × 4 張',
                effect: '【領地】殖民星球\n每塊殖民星球\n若與公園星球相鄰，\n計分 +2。',
                flavorText: '「移民在這顆星球上建立了繁榮的新文明。」',
                imagePath: '/images/territory_colony.png',
                hex: '#1d4ed8'
            },
            {
                id: 'territory-park',
                value: 4,
                name: '公園星球',
                count: 4,
                summary: '公園 × 4 張',
                effect: '【領地】公園星球\n最大連續公園區塊，\n每塊計分 +2。',
                flavorText: '「受到保護的自然星球，是星際移民最嚮往的度假勝地。」',
                imagePath: '/images/territory_park.png',
                hex: '#16a34a'
            },
            {
                id: 'target-mine',
                value: 5,
                name: '採礦策略',
                count: 1,
                summary: '★ 計分目標牌',
                effect: '【計分目標】\n本局你的採礦星球\n每相鄰一個非採礦星球，\n額外加 1 分。',
                flavorText: '「制定明確的採礦策略，讓每個礦場都發揮最大價值。」',
                imagePath: '/images/target_mine.png',
                hex: '#b45309'
            },
            {
                id: 'target-diversity',
                value: 6,
                name: '多元版圖',
                count: 1,
                summary: '★ 計分目標牌',
                effect: '【計分目標】\n本局若你的版圖包含\n全部 4 種不同領地，\n額外加 5 分！',
                flavorText: '「星際帝國的真正強大，在於各類星球的均衡發展。」',
                imagePath: '/images/target_diversity.png',
                hex: '#7c3aed'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '將 18 張牌排成環形（正面朝上）。背面的計分目標為本局計分規則（僅計分時才翻開）。'
            },
            {
                title: '輪抽規則',
                desc: '2 人輪流進行。每回合，目前玩家從環形牌陣中取走 1 張，放入自己的版圖中任意位置，或跳過，跳到下一張牌旁繼續。'
            },
            {
                title: '版圖拼放',
                desc: '取走的牌需緊靠自己已有的版圖（第一張可放任意位置）。牌與牌之間形成的領地區域是最終計分的依據。'
            },
            {
                title: '計分',
                desc: '牌抽完後，翻開計分目標牌，依照目標計算雙方分數。\n• 基礎分：各領地類型最大連續區塊\n• 目標分：依計分目標牌額外加分\n• 得分較高者勝！'
            }
        ]
    }
};
