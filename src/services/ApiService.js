import axios from 'axios'

import api from '../config/api'
import ErrorService from './ErrorService'

class ApiService {

    async apiCall(url, method = 'GET', token = false, params = null, query = null) {
        let payload = {
            url : url,
            method,
            query,
            headers: this.buildHeaders(token),
        }

        if (query) {
            payload.params = query;
        }
        if (params) {
            payload.data = params;
        }
        const res = await axios.request(payload).catch((error)=>{
            return error.response
        })

        return res;
    }

    buildHeaders(token = false) {
        let headers = {};
        headers['Content-type'] = 'application/json'
        if (token) {
            headers['Authorization'] = token
        }
        return headers;
    }

    // 测试 获取pods
    async getPods() {
        const token = null
        const url = `${api.pod}`
        const res = await this.apiCall(url, 'GET', token, null);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

    // 测试 获取deploy
    async getDeploys() {
        const token = null
        const url = `${api.deploy}`
        const res = await this.apiCall(url, 'GET', token, null);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

    async getDeploy(name) {
        const token = null
        const url = `${api.deploy}/${name}`
        const res = await this.apiCall(url, 'GET', token, null);
        const data = ErrorService.handleCommonError(res)
        return data;
    }
}

export default new ApiService()