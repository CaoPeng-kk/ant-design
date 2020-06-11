// 导出一个对象，暂时设置为空对象，后面再填充内容

export default {
    // plugins: [
    //     ["umi-plugin-react", {
    //         //暂时不启用任何功能
    //         dva : true , //开启了dva功能,
    //         antd : true
    //     }]
    // ]
    dva: {},
    antd: {},

    routes:[
        {
            path: '/',
            component: '../layouts',//配置布局路由
            routes: [
                {
                    path:'/Hello',
                    component:'./Hello',
                },
                {
                    path: '/List',
                    component: './List'
                },
                {
                    path: '/Transac',
                    component: './Transac'
                }
            ]
        }
    ]
};
