export const versions = {
    'campus-troublemaker': {
        id: 'campus-troublemaker',
        name: '校園搗蛋鬼 (34張)',
        referenceGame: '犯人在跳舞 (Criminal Dance)',
        description: '支援 3-8 人遊玩',
        backColor: '#fdf4ff',
        backBorder: '#c026d3',
        pattern: 'topography-pattern',
        cards: [
            { id: 1, name: '搗蛋鬼', count: 1, value: 1, effect: '只能作為最後一張手牌打出。此時你獲勝！', hex: '#b91c1c', textHex: '#ffffff', enName: 'Troublemaker', summary: '最後打出', imagePath: '/images/troublemaker.png' },
            { id: 2, name: '班長', count: 1, value: 1, effect: '遊戲開始時，持有此牌的玩家必須第一張打出，並大喊「有人搗蛋！」。', hex: '#c2410c', textHex: '#ffffff', enName: 'Monitor', summary: '首張打出', imagePath: '/images/monitor.png' },
            { id: 3, name: '風紀股長', count: 4, value: 4, effect: '指定一名玩家猜測他是否有「搗蛋鬼」牌。如果猜中，你獲勝！如果他有「完美藉口」，可以否認。', hex: '#1e3a8a', textHex: '#ffffff', enName: 'Prefect', summary: '抓搗蛋鬼', imagePath: '/images/prefect.png' },
            { id: 4, name: '完美藉口', count: 5, value: 5, effect: '即使你有「搗蛋鬼」牌，被風紀股長指認時也能大聲說「我不是搗蛋鬼」。打出時無特殊效果。', hex: '#15803d', textHex: '#ffffff', enName: 'Excuse', summary: '躲避指認', imagePath: '/images/excuse.png' },
            { id: 5, name: '死黨', count: 2, value: 2, effect: '打出後，你成為搗蛋鬼陣營。如果搗蛋鬼獲勝，你也獲勝。', hex: '#7e22ce', textHex: '#ffffff', enName: 'Bestie', summary: '結盟', imagePath: '/images/bestie.png' },
            { id: 6, name: '巡邏老師', count: 1, value: 1, effect: '指定一名玩家棄掉一張手牌。如果是「搗蛋鬼」，你獲勝！', hex: '#a16207', textHex: '#ffffff', enName: 'Teacher', summary: '沒收卡牌', imagePath: '/images/teacher.png' },
            { id: 7, name: '校園八卦', count: 4, value: 4, effect: '所有玩家將一張手牌面朝下傳給右邊的玩家。', hex: '#4f46e5', textHex: '#ffffff', enName: 'Gossip', summary: '集體換牌', imagePath: '/images/gossip.png' },
            { id: 8, name: '交換筆記', count: 4, value: 4, effect: '指定一名玩家，秘密交換一張手牌。', hex: '#0891b2', textHex: '#ffffff', enName: 'Notes', summary: '兩人換牌', imagePath: '/images/notes.png' },
            { id: 9, name: '強制換座', count: 5, value: 5, effect: '指定一名玩家，秘密與他交換彼此所有的手牌。', hex: '#059669', textHex: '#ffffff', enName: 'Swap', summary: '全部換牌', imagePath: '/images/swap.png' },
            { id: 10, name: '觀察員', count: 3, value: 3, effect: '指定一名玩家，秘密查看他所有的手牌。', hex: '#475569', textHex: '#ffffff', enName: 'Observer', summary: '看手牌', imagePath: '/images/observer.png' },
            { id: 11, name: '無辜同學', count: 2, value: 2, effect: '這是一張沒有任何效果的牌，打出後安全過關。', hex: '#9ca3af', textHex: '#ffffff', enName: 'Innocent', summary: '無效果', imagePath: '/images/innocent.png' },
            { id: 12, name: '生教組長 (擴充)', count: 1, value: 1, effect: '打出此牌後，你可以猜測搗蛋鬼在誰手上，猜中則風紀陣營獲勝。此牌不能被交換或傳遞。', hex: '#be185d', textHex: '#ffffff', enName: 'Master', summary: '擴充卡', imagePath: '/images/master.png' },
            { id: 13, name: '跟屁蟲 (擴充)', count: 1, value: 1, effect: '打出此牌後，搗蛋鬼必須向你使眼色承認，你成為死黨。', hex: '#ea580c', textHex: '#ffffff', enName: 'Tag-along', summary: '擴充卡', imagePath: '/images/tag_along.png' },
        ],
        rules: [
            { pt: 1, title: "搗蛋鬼", en: "(1)", count: 1, desc: "只能作為最後一張手牌打出。此時你獲勝！" },
            { pt: 2, title: "班長", en: "(1)", count: 1, desc: "遊戲開始時，持有此牌必須第一張打出。" },
            { pt: 3, title: "風紀股長", en: "(4)", count: 4, desc: "指認一名玩家，猜中搗蛋鬼即獲勝。" },
            { pt: 4, title: "完美藉口", en: "(5)", count: 5, desc: "持有此牌時可對風紀說謊否認是搗蛋鬼。" },
            { pt: 5, title: "巡邏老師", en: "(1)", count: 1, desc: "強制別人棄一張牌，棄掉搗蛋鬼即獲勝。" },
            { pt: 6, title: "八卦/筆記/換座", en: "(13)", count: 13, desc: "透過各種方式交換手牌，轉移搗蛋鬼。" },
            { pt: 7, title: "死黨/觀察員", en: "(5)", count: 5, desc: "幫助搗蛋鬼，或查看別人的手牌。" }
        ]
    }
};
