const prod = process.env.NODE_ENV === 'production'

const http_api = {
  'SERVER_URL': prod ? 'https://laki.shitangdama.cn' :'http://127.0.0.1:8080',
  'CLIENT_URL': prod ? 'http://laki-api.shitangdama.cn' :'http://127.0.0.1:3000',
}

export default http_api;