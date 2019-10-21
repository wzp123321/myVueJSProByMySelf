const siders = [{
        path: "/dashaboard",
        icon: "icon-shouye",
        title: "首页",
        children: []
    },
    {
        path: "/components",
        icon: "icon-zujian",
        title: "组件",
        children: []
    },
    {
        path: "/error",
        icon: "icon-icon-test",
        title: "错误页面",
        children: [{
                path: "/error/404",
                title: "404页面",
            },
            {
                path: "/error/401",
                title: "401页面",
            }
        ]
    },
]


export default siders