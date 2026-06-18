// Version: 1.0.0
// Changelog:
// - Initial creation: 三國謀士 (Three Kingdoms Strategist)，改編自阿維尼翁 (Avignon)
export const versions = {
    'three-kingdoms': {
        id: 'three-kingdoms',
        name: '三國謀士 (18張)',
        title: '三國謀士 (Three Kingdoms Strategist)',
        themeName: '拉鋸與排程',
        referenceGame: '阿維尼翁 (Avignon)',
        description: '一款 2 人的歷史策略拉鋸遊戲！玩家扮演曹操或劉備的謀士，利用 18 張角色牌將關鍵武將拉攏到自己陣營！',
        cardBorder: '#991b1b', // red-800
        backBorder: '#450a0a', // red-950
        cards: [
            {
                id: 'strategist-zhuge',
                value: 1,
                name: '諸葛亮',
                count: 1,
                summary: '軍師 (2張牌拉力)',
                effect: '【拉力 2】\n使用此牌時，\n將牌陣中線的\n任意 1 名武將\n向自己方向移動 2 格。',
                flavorText: '「臥龍之謀，隆中一對，胸懷天下大局。」',
                imagePath: '/images/general_zhuge.png',
                hex: '#1e40af'
            },
            {
                id: 'strategist-cao',
                value: 2,
                name: '郭嘉',
                count: 1,
                summary: '謀臣 (拉力+看牌)',
                effect: '【拉力 1 + 情報】\n使用此牌時，\n將 1 名武將\n向自己方向移動 1 格，\n並查看對手 1 張手牌。',
                flavorText: '「奉孝之謀，鬼算神斷，曹操最倚重的奇謀之士。」',
                imagePath: '/images/general_guo.png',
                hex: '#92400e'
            },
            {
                id: 'general-guan',
                value: 3,
                name: '關羽',
                count: 2,
                summary: '武將 (本身有拉力)',
                effect: '【關羽效果】\n此牌每回合被移動時，\n也能帶動相鄰的\n1 名武將同方向移動 1 格。',
                flavorText: '「義薄雲天的武聖，不離劉備左右，桃園三結義之情。」',
                imagePath: '/images/general_guan.png',
                hex: '#dc2626'
            },
            {
                id: 'general-zhang',
                value: 4,
                name: '張飛',
                count: 2,
                summary: '武將 (抵擋被拉)',
                effect: '【張飛效果】\n當對手使用牌\n要移動張飛時，\n可以棄 1 張手牌\n抵擋此次移動。',
                flavorText: '「燕人張益德，萬夫莫當！長坂橋上怒吼震退曹兵。」',
                imagePath: '/images/general_zhang.png',
                hex: '#374151'
            },
            {
                id: 'general-zhao',
                value: 5,
                name: '趙雲',
                count: 2,
                summary: '武將 (可移到任意位)',
                effect: '【趙雲效果】\n使用牌移動趙雲時，\n可以無視格數限制，\n將趙雲移到\n任意空格（含自己陣營側）。',
                flavorText: '「常山趙子龍，七進七出長坂坡，護幼主安全。」',
                imagePath: '/images/general_zhao.png',
                hex: '#0284c7'
            },
            {
                id: 'strategy-ambush',
                value: 6,
                name: '埋伏之計',
                count: 3,
                summary: '陷阱牌（推開敵方）',
                effect: '【拉力 -1】\n使用此牌時，\n選一名在對手陣營側的武將，\n將其向中線方向\n推回 1 格。',
                flavorText: '「知己知彼，百戰不殆，以靜制動等待最佳時機。」',
                imagePath: '/images/strategy_ambush.png',
                hex: '#1c1917'
            },
            {
                id: 'strategy-alliance',
                value: 7,
                name: '連環計',
                count: 3,
                summary: '連鎖效果',
                effect: '【連鎖】\n使用此牌後，\n你本回合可以\n再使用 1 張手牌。\n（只能觸發一次）',
                flavorText: '「連環計連環使，讓敵人防不勝防。」',
                imagePath: '/images/strategy_chain.png',
                hex: '#4338ca'
            },
            {
                id: 'strategy-spy',
                value: 8,
                name: '反間諜',
                count: 2,
                summary: '轉化對手的移動',
                effect: '【反制】\n當對手使用牌移動\n任意武將時，\n可以打出此牌取消，\n那次移動無效。',
                flavorText: '「間諜的最高境界，是讓敵人的計謀為我所用。」',
                imagePath: '/images/strategy_spy.png',
                hex: '#065f46'
            },
            {
                id: 'strategy-retreat',
                value: 9,
                name: '空城計',
                count: 2,
                summary: '回合免疫',
                effect: '【防禦】\n打出此牌後，\n本回合你所有\n武將無法被\n對手移動。',
                flavorText: '「城門大開，自己悠閒撫琴，嚇退了司馬懿的大軍。」',
                imagePath: '/images/strategy_empty.png',
                hex: '#a16207'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '將 6 張武將牌（關羽×2、張飛×2、趙雲×2）放在中間 6 格牌陣（3-0-3 分布）。玩家各持 6 張策略牌。'
            },
            {
                title: '回合流程',
                desc: '2 人輪流行動。每回合打出 1 張手牌並執行其效果（移動或反制）。打出後從剩餘牌庫補牌至 3 張。'
            },
            {
                title: '勝利條件',
                desc: '將牌陣中任意 3 名武將移動到自己陣營側（最靠近自己的格子），即宣布勝利！'
            },
            {
                title: '平局',
                desc: '如果牌庫和手牌都打完，則比較雙方陣營內的武將數量，較多者獲勝；若相同則視為平局。'
            }
        ]
    }
};
