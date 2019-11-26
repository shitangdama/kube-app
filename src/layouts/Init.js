import React from 'react';
// import { inject, observer } from 'mobx-react'

function Init() {

    function componentDidMount() {

        let history = useHistory()
        // if(this.props.admin.getStatus()) {
            history.push('/dashboard/pods')
        // }else{
            // history.push('/login')
        // }
    };

    return (
        <div />
    )
}

export default Init;