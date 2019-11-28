import React from 'react'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

import {
    Card,
    PageHeader,
    Table
} from 'antd';

const { Column } = Table;

@inject('pod')
@observer
export default class Info extends React.Component {

    componentDidMount() {
        this.props.pod.getPods()
    }

    render() {
        console.log(this.props.pod.pods)
        const pods = this.props.pod.pods
        return (
            <div className="card-info-table">
                <Card bordered={false}>
                    <Table dataSource={pods.slice()}>
                        <Column
                            title="名称"
                            key="name"
                            width={450}
                            render={(data, record) => {
                                return (
                                <span>{data.metadata.name}</span>
                                )
                            }}
                        />
                    </Table>
                </Card>
            </div>
        )
    }
}