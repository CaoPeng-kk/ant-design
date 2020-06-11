export default {
    'get /ds/list': function (req, res) { //模拟请求返回数据
        res.json({
            data: [1, 2, 3, 4, 5],
            maxNum: 5
        });
    },
    'get /ds/user/list': function (req, res) {
        res.json([{
            key: '1234',
            name: '1234',
            age: 32,
            address: '上海市',
            tags: ['程序员'],
        }, {
            key: '1234',
            name: '1234',
            age: 42,
            address: '北京市',
            tags: ['程序员'],
        }, {
            key: '1234',
            name: '1234',
            age: 32,
            address: '杭州市',
            tags: ['程序员'],
        }]);
    }


}