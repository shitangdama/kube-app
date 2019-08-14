const prod = process.env.NODE_ENV === 'production'

const http_api = {
  'SERVER_URL': prod ? 'http://127.0.0.1:8080' :'http://127.0.0.1:8080',
  'CLIENT_URL': prod ? 'http://127.0.0.1:3000' :'http://127.0.0.1:3000',
}

export default http_api;