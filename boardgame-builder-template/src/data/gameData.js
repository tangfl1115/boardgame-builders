export const versions = {
    template: {
        title: "桌遊產生器模板",
        themeName: "Template Theme",
        description: "這是一個空白的桌遊產生器模板，供 AI 快速建立全新桌遊使用。",
        cardTypes: [
            {
                id: 'card-1',
                value: 1,
                name: "佔位卡牌",
                count: 5,
                effect: "這是一張佔位卡牌的效果說明。請替換為真實的卡牌效果。",
                flavorText: "「這是一段佔位的背景故事。」",
                iconKey: 'crown',
                hexColor: '#94a3b8'
            }
        ],
        rules: [
            {
                title: "遊戲目標",
                desc: "這是遊戲目標的佔位文字。請替換為真實的規則說明。"
            },
            {
                title: "回合流程",
                desc: "這是回合流程的佔位文字。請替換為真實的回合流程。"
            }
        ]
    }
};
