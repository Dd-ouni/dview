
export default {
    base: process.env.NODE_ENV === 'production' ? '/ddview/' : '/',
    themeConfig: {
        siteTitle: "DView",
        nav: [
            { text: "文档", link: "/guide/" }
        ],
        sidebar: {
            '/': [
                {
                    text: '引入',
                    items: [
                        {
                            text: '介绍',
                            link: '/guide/introduce'
                        },
                        {
                            text: '快速开始',
                            link: '/guide/quickstart'
                        }
                    ]
                },
                {
                    text: '基础组件',
                    items: [
                        {
                            text: 'Button',
                            link: '/components/button'
                        },
                        {
                            text: 'Container',
                            link: '/components/container'
                        },
                        {
                            text: 'Dialog',
                            link: '/components/dialog'
                        },
                        {
                            text: 'Table',
                            link: '/components/table'
                        }
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/Dd-ouni/dview" },
        ],
    },

};