// import React from 'react';
// import { inject, observer } from 'mobx-react'
// import { Route, Redirect } from 'react-router-dom'

// @inject('admin')
// @observer
// class PrivateRoute extends React.Component {

//     render() {
//         const {route, admin} = this.props;
//         const isLoginStatus = admin.getStatus()
//         return (
//             <Route path={route.path}
//              exact={route.exact}
//              render={props => (
//                 isLoginStatus ? (
//                     <route.component {...props} routes={route.routes}/>
//                 ) : (
//                     <Redirect to={{
//                         pathname: '/login',
//                     }}/>
//                 )
//             )}/>
//         )
//     }
// }
// export default PrivateRoute