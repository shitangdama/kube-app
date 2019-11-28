import _ from 'lodash'
import { observable, action, runInAction } from 'mobx'

import ApiService from '../services/ApiService'

class Deploy {
    @observable deploys = []

    @action
    getDeploys = async () => {
        const data = await ApiService.getDeploys()
        runInAction(()=>{
            this.deploys = data.items
        })
    }


    @action
    getDeploy = async (name) => {
        const data = await ApiService.getDeploy(name)
        return data
    }
}

export default new Deploy()