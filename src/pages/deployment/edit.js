import React from 'react'
import { inject, observer } from 'mobx-react'
import MonacoEditor, { MonacoEditorProps } from 'react-monaco-editor';
import ResizeObserver from 'resize-observer-polyfill';
import debounce from 'lodash/debounce';

import {
    Card
} from 'antd';
import './edit.less';

@inject('deploy')
@observer
export default class Edit extends React.Component {
    handleResize = debounce(([entry]) => {
        console.log(entry.contentRect)
        this.setState({
            height: Math.max(entry.contentRect.height, this.state.containerHeight),
            width: entry.contentRect.width,
        })
    }, 100)

    state = {
        code: "",
        language: "json",
        height: 500,
        width: 100,
        containerHeight: 500,
    }

    observer = null
    container = React.createRef()

    componentDidMount() {
        this.observer = new ResizeObserver(this.handleResize)
        if (this.container.current) {
            this.observer.observe(this.container.current)
        }
        this.init()
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect()
        }
    }


    init = async () => {
        const name = this.props.match.params.name
        const data = await this.props.deploy.getDeploy(name)
        this.setState({
            code: JSON.stringify(data, null, 4),
        })
        setTimeout(() => {
            this.setState({
                containerHeight: document.querySelector('main .container').getBoundingClientRect().height,
            })
        })
    }

    handleCodeChange = debounce(() => {
    }, 200)

    render() {
        const { width, height } = this.state
        const { width: w, height: h, className, ...restProps } = this.props
        return (
            <div className={className} style={{ height: '100%', width: '100%' }} ref={this.container}>
                <MonacoEditor width={width} height={height} value={this.state.code} {...restProps} onChange={this.handleCodeChange} />
            </div>
        )
    }
}
