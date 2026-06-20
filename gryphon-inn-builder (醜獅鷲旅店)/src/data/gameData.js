// Version: 1.0.0
// Changelog:
// - Initial creation: 糗客棧 (Awkward Inn)，改編自醜獅鷲旅店 (Ugly Gryphon Inn)
export const versions = {
    'awkward-inn': {
        id: 'awkward-inn',
        name: '糗客棧 (18張)',
        title: '糗客棧 (Awkward Inn)',
        themeName: '條件觸發連鎖',
        referenceGame: '醜獅鷲旅店 (Ugly Gryphon Inn)',
        description: '你是奇幻客棧的老闆！18 位脾氣古怪的旅客都有自己的條件。妥善安排座位，避免連鎖衝突，讓所有人都滿意！',
        cardBorder: '#a16207', // amber-700
        backBorder: '#713f12', // amber-950
        cards: [
            {
                id: 'guest-knight',
                value: 1,
                name: '暴躁騎士',
                count: 2,
                summary: '不與魔法師相鄰',
                effect: '【條件】如果與魔法師相鄰，\n立刻離開客棧，\n扣 3 分。\n共 2 張。',
                flavorText: '「金屬盔甲嘩啦作響的騎士，最討厭喜歡放魔法的傢伙。」',
                imagePath: '/images/guest_knight.png',
                hex: '#94a3b8'
            },
            {
                id: 'guest-wizard',
                value: 2,
                name: '神神秘秘魔法師',
                count: 2,
                summary: '不與騎士相鄰',
                effect: '【條件】如果與騎士相鄰，\n立刻離開客棧，\n扣 3 分。\n共 2 張。',
                flavorText: '「披著神秘星空長袍，對騎士的粗魯感到不耐煩。」',
                imagePath: '/images/guest_wizard.png',
                hex: '#4338ca'
            },
            {
                id: 'guest-bard',
                value: 3,
                name: '話嘮吟遊詩人',
                count: 2,
                summary: '需要相鄰聽眾',
                effect: '【條件】必須安排在至少\n1 位其他旅客相鄰的位置，\n否則扣 2 分。\n共 2 張。',
                flavorText: '「整天彈琴唱歌，沒有觀眾就無法安心進食。」',
                imagePath: '/images/guest_bard.png',
                hex: '#ea580c'
            },
            {
                id: 'guest-dwarf',
                value: 4,
                name: '挑剔矮人',
                count: 2,
                summary: '需要角落座位',
                effect: '【條件】必須安排在\n客棧角落（僅一邊相鄰）\n否則扣 2 分。\n共 2 張。',
                flavorText: '「矮人必須守護側翼！只有坐在角落他才感到安全。」',
                imagePath: '/images/guest_dwarf.png',
                hex: '#92400e'
            },
            {
                id: 'guest-elf',
                value: 5,
                name: '傲嬌精靈',
                count: 2,
                summary: '不與同種旅客相鄰',
                effect: '【條件】不能與另一位精靈\n安排在相鄰位置，\n否則扣 3 分。\n共 2 張。',
                flavorText: '「精靈的優雅不容絲毫玷污，同類相爭是最大的恥辱。」',
                imagePath: '/images/guest_elf.png',
                hex: '#16a34a'
            },
            {
                id: 'guest-goblin',
                value: 6,
                name: '搗蛋哥布林',
                count: 2,
                summary: '旁邊的旅客易扣分',
                effect: '【效果】安排在哥布林相鄰\n的旅客，若其條件未滿足\n則額外扣 1 分。\n共 2 張。',
                flavorText: '「哥布林會搗亂，讓旁邊的旅客更難保持心情平靜。」',
                imagePath: '/images/guest_goblin.png',
                hex: '#65a30d'
            },
            {
                id: 'guest-dragon',
                value: 7,
                name: '迷你噴火龍',
                count: 2,
                summary: '需要遠離窗邊',
                effect: '【條件】必須安排在\n客棧中央（四面均有鄰居），\n否則扣 4 分。\n共 2 張。',
                flavorText: '「迷你龍的噴火會把布幔燒掉，必須遠離窗邊！」',
                imagePath: '/images/guest_dragon.png',
                hex: '#dc2626'
            },
            {
                id: 'guest-thief',
                value: 8,
                name: '賊眼神偷',
                count: 2,
                summary: '相鄰旅客會少得 1 分',
                effect: '【效果】與神偷相鄰的\n旅客，在計分時\n各減少 1 分（被偷走了）。\n共 2 張。',
                flavorText: '「眼神閃爍的神偷讓旁邊的人不安心，總感覺少了什麼。」',
                imagePath: '/images/guest_thief.png',
                hex: '#374151'
            },
            {
                id: 'guest-princess',
                value: 9,
                name: '嬌貴公主',
                count: 1,
                summary: '需要最高規格安排',
                effect: '【條件】必須安排在\n完全不與任何負面角色\n（哥布林/神偷）相鄰，\n否則扣 5 分。\n共 1 張。',
                flavorText: '「公主殿下駕到！她的座位必須絕對完美，否則後果自負。」',
                imagePath: '/images/guest_princess.png',
                hex: '#be185d'
            },
            {
                id: 'guest-innkeeper',
                value: 10,
                name: '老闆的秘方',
                count: 1,
                summary: '滿足條件最多=最多獎勵',
                effect: '【加分】每有 3 位旅客\n完全滿足自己的條件，\n獲得 2 分獎勵。\n共 1 張。',
                flavorText: '「老闆娘的秘方湯汁讓所有滿意的客人都多賞了小費！」',
                imagePath: '/images/guest_innkeeper.png',
                hex: '#b45309'
            }
        ],
        rules: [
            {
                title: '遊戲目標',
                desc: '將 18 張旅客牌安排進 3×6 的客棧座位格，盡量滿足每位旅客的特殊條件，獲得最多分數！'
            },
            {
                title: '安排流程',
                desc: '洗勻 18 張旅客牌，一次翻出 1 張，立即放入客棧格中任意空位（旅客牌面朝上）。'
            },
            {
                title: '計分',
                desc: '全部安排完畢後，逐一確認每位旅客的條件：\n• 條件滿足：+2 分\n• 條件未滿足：按牌面扣分\n• 特殊加分牌：額外計算'
            },
            {
                title: '勝利目標',
                desc: '最終得分越高越好！\n★★★ 30 分以上：全員滿意，金牌老闆！\n★★ 20-29 分：客棧正常運營。\n★ 19 分以下：旅客怨聲載道，繼續改進！'
            }
        ]
    }
};
