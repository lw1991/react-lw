export default {
  mock: 'uat',
  host: '',
  apiServer: { // api服务器
    "uat": "http://localhost:3000",
    "prod": "https://**.com"
  },
  init() {
    const { hostname } = window.location
    if( hostname.includes('192.168') || hostname.includes('localhost')) {
      // 本地开发环境
      this.host = this.apiServer[this.mock]
    } else {
      // 线上开发环境
      this.host = this.apiServer['prod']
    }
  },
  history: null // 跳转路由
}
