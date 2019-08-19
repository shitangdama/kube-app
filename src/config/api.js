import config from "./index"

const api = {
    auth: config.SERVER_URL + "/auth",
    pod: config.SERVER_URL + "/pods",

}

export default api;