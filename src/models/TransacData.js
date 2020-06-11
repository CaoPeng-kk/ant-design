import request from "../util/request";

export default {
    namespace: 'transac',
    state: {
        list: []
    },

    effects: {
        *initData(params, sagaEffects) {
            const {call, put} = sagaEffects;
            const url = "http://localhost:8080/transac";
            let resultdata = yield call(request, url);
            const { data } = resultdata;
            const { records } = data;
            yield put({
                type : "queryList",
                data : records
            });
        }
    },

    reducers: {
        queryList(state, result) {
            let data = [...result.data];
            return { //更新状态值
                list: data
            }
        }
    }

}