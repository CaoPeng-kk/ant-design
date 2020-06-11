import React from 'react';
import { connect } from 'dva';

import {Table, Divider, Tag, Pagination } from 'antd';

const {Column} = Table;

const namespace = 'transac';

@connect((state)=>{
    return {
        data : state[namespace].list
    }
}, (dispatch) => {
    return {
        initData : () => {
            dispatch({
                type: namespace + "/initData"
            });
        }
    }
})
class UserList extends React.Component {

    componentDidMount(){
        this.props.initData();
    }

    render() {
        return (
            <div>
                <Table dataSource={this.props.data} pagination={{position:"bottom",total:500,pageSize:10, defaultCurrent:3}}>
                    <Column
                        title="交易ID"
                        dataIndex="transId"
                        key="transId"
                    />
                    <Column
                        title="客户号"
                        dataIndex="custId"
                        key="custId"
                    />
                    <Column
                        title="账户号"
                        dataIndex="account"
                        key="account"
                    />
                    <Column
                        title="卡号"
                        dataIndex="cardNbr"
                        key="cardNbr"
                    />
                    <Column
                        title="交易流水号"
                        dataIndex="tranno"
                        key="tranno"
                    />
                    <Column
                        title="账单月"
                        dataIndex="monthNbr"
                        key="monthNbr"
                    />
                    <Column
                        title="交易金额"
                        dataIndex="bill"
                        key="bill"
                    />
                    <Column
                        title="交易类型"
                        dataIndex="transType"
                        key="transType"
                    />
                    <Column
                        title="交易日期"
                        dataIndex="txnDatetime"
                        key="txnDatetime"
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a href="javascript:;">修改</a>
                                <Divider type="vertical"/>
                                <a href="javascript:;">删除</a>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }

}

export default UserList;