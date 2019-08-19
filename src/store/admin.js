import _ from 'lodash'
import { observable, action, runInAction } from 'mobx'

import ApiService from '../services/ApiService'
import history from '../routers/history'

class Admin {

    @observable auth_token = ""

    @observable user = {}

    @observable isLoginStaus = false
    // @observable socketStatus = false

    @action 
    login = async (values) => {
        const params = new URLSearchParams();
        params.append('username', values.username);
        params.append('password', values.password);
        const data = await ApiService.login(params)
        console.log(data)
        history.push("/dashboard/")
    }

}

export default new Admin();