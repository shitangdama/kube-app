import React from 'react'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

import {
    Card,
    PageHeader,
    List
} from 'antd';

export default class PodList extends React.Component {

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <PageHeader
                    title="pod信息"
                    subTitle="所有pod信息"
                />
                <div className={classNames("content-info", "median-list")}>

                    <Card>
                        <List
                            itemLayout="horizontal"
                            dataSource={pods.slice()}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.metadata.name}
                                    description={item.metadata.namespace}
                                />
                            </List.Item>
                            )}
                        />
                    </Card>
                </div>
            </div>
        )
    }
}