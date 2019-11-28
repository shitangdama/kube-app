import React from 'react'
import { inject, observer } from 'mobx-react'

// import MonacoEdit from "../../components/codeEdit"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-github";

import {
    Card
} from 'antd';

@inject('deploy')
@observer
export default class Edit extends React.Component {

    state = {
        code: "",
        language: "json"

    }

    componentDidMount() {
        this.init()
    }

    init = async () => {
        const name = this.props.match.params.name
        const data = await this.props.deploy.getDeploy(name)
        this.setState({
            code: JSON.stringify(data,null, 4)
        })
    }

    render() {
        return (
            <div className="card-info-table">
                <Card bordered={false}>
                    <AceEditor
                        mode="json"
                        theme="github"
                        value={this.state.code}
                        onChange={this.onEditChange}
                        name="editapp"
                    />
                </Card>
            </div>
        )
    }
}