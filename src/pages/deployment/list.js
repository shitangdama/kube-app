import React from 'react'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

import {
    Card,
    List,
    Table,
    Avatar
} from 'antd';

import history from "../../routers/history"

const { Column } = Table;

@inject('deploy')
@observer
export default class Info extends React.Component {

    componentDidMount() {
        this.props.deploy.getDeploys()
    }

    handleEditClick = (e, name) => {
        e.preventDefault()
        history.push("/dashboard/deploys/"+name+"/edit")
    }

    render() {
        const deploys = this.props.deploy.deploys
        return (
            <div className="card-info-list">
                <Card bordered={false}>
            <List
                className="demo-loadmore-list"
                itemLayout="vertical"
                dataSource={deploys.slice()}
                renderItem={item => (
                <List.Item
                    actions={[
                        <a>scale</a>,
                        <a href='javascript:;' onClick={(e)=>this.handleEditClick(e, item.metadata.name)}>Edit</a>,
                        <a>delete</a>
                    ]}
                >
                    <List.Item.Meta
                        avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.metadata.name}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <div>content</div>
                </List.Item>
                )}
            />
                </Card>
            </div>
        )
    }
}