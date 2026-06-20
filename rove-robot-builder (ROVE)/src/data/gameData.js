// Version: 1.0.0
// Changelog:
// - Initial creation: 太空機器人 (Space Robot)，改編自機器人空間解謎 (ROVE)
export const versions = {
    'space-robot': {
        id: 'space-robot',
        name: '太空機器人 (18張)',
        title: '太空機器人 (Space Robot)',
        themeName: '程式邏輯解謎',
        referenceGame: '機器人空間解謎 (ROVE)',
        description: '一款 1-2 人的程式邏輯解謎遊戲！你是太空機器人的程式設計師，用行動指令卡讓機器人模組在 2D 網格中完成任務！',
        cardBorder: '#1d4ed8', // blue-700
        backBorder: '#1e3a8a', // blue-900
        cards: [
            {
                id: 'cmd-forward',
                value: 1,
                name: '前進指令',
                count: 4,
                summary: '向前移動 1 格',
                effect: '【移動指令】\n選擇一個模組，\n讓它向目前面向的\n方向前進 1 格。\n共 4 張。',
                flavorText: '「前進！探索器的每一步都是人類邁向未知的一步。」',
                imagePath: '/images/cmd_forward.png',
                hex: '#2563eb'
            },
            {
                id: 'cmd-rotate',
                value: 2,
                name: '旋轉指令',
                count: 4,
                summary: '旋轉 90°',
                effect: '【旋轉指令】\n選擇一個模組，\n讓它原地旋轉 90°\n（順時針或逆時針）。\n共 4 張。',
                flavorText: '「改變方向，才能找到解決問題的新角度。」',
                imagePath: '/images/cmd_rotate.png',
                hex: '#0891b2'
            },
            {
                id: 'cmd-boost',
                value: 3,
                name: '加速指令',
                count: 3,
                summary: '向前移動 2 格',
                effect: '【加速指令】\n選擇一個模組，\n讓它向目前面向的\n方向前進 2 格。\n共 3 張。',
                flavorText: '「全力衝刺！快速橫越危險地帶，抵達目標！」',
                imagePath: '/images/cmd_boost.png',
                hex: '#7c3aed'
            },
            {
                id: 'cmd-swap',
                value: 4,
                name: '模組交換',
                count: 2,
                summary: '兩模組互換位置',
                effect: '【交換指令】\n選擇任意兩個模組，\n讓它們立即\n互換在網格上的位置。\n共 2 張。',
                flavorText: '「傳送技術讓模組可以瞬間交換位置，突破空間限制。」',
                imagePath: '/images/cmd_swap.png',
                hex: '#059669'
            },
            {
                id: 'cmd-link',
                value: 5,
                name: '組合連結',
                count: 2,
                summary: '兩相鄰模組對齊',
                effect: '【連結指令】\n選擇相鄰的兩個模組，\n讓後者移動到\n前者背後的格子，\n朝向相同方向。\n共 2 張。',
                flavorText: '「模組組合是完成複雜任務的關鍵，一加一大於二！」',
                imagePath: '/images/cmd_link.png',
                hex: '#b45309'
            },
            {
                id: 'cmd-scan',
                value: 6,
                name: '掃描指令',
                count: 2,
                summary: '查看任意目標格',
                effect: '【掃描指令】\n揭開遮蓋的目標卡。\n獲得 1 個「掃描標記」。\n可用 2 個掃描標記\n替換任一移動指令。\n共 2 張。',
                flavorText: '「先掃描環境，再決定行動，是太空探索的黃金法則。」',
                imagePath: '/images/cmd_scan.png',
                hex: '#d97706'
            },
            {
                id: 'cmd-mission',
                value: 7,
                name: '任務目標',
                count: 1,
                summary: '本局的勝利條件',
                effect: '【任務卡】\n本張卡上標示了\n機器人模組需到達的\n目標位置與方向。\n在限定步數內完成任務！',
                flavorText: '「任務簡報已上傳至機器人系統，請開始執行！」',
                imagePath: '/images/cmd_mission.png',
                hex: '#be123c'
            }
        ],
        rules: [
            {
                title: '準備',
                desc: '在 4×4 的網格上放置 2-4 個機器人模組（面向各方向）。翻出 1 張任務目標卡，確認模組需到達的位置與面向。'
            },
            {
                title: '打牌規則',
                desc: '玩家輪流（或單人進行），每回合打出 1 張指令卡並執行效果。每局限定 10 張指令卡（從 17 張指令中取）完成任務。'
            },
            {
                title: '勝利條件',
                desc: '在用完指令卡前，讓任務目標指定的機器人模組到達目標格，且面向正確方向，即完成任務！'
            },
            {
                title: '計分',
                desc: '完成任務所用指令越少，得分越高。\n≤ 6 張：★★★ 程式天才！\n7-9 張：★★ 太空工程師。\n10 張：★ 任務勉強完成。\n未完成：繼續練習！'
            }
        ]
    }
};
