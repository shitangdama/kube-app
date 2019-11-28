import config from "./index"

const api = {
    auth: config.SERVER_URL + "/auth",
    pod: config.SERVER_URL + "/api/v1/pods",
    deploy: config.SERVER_URL + "/api/v1/deploys",
}

export default api;