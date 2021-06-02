// 对于接口代理的配置（CROS和JSP）
module.exports = {
      devServer: {
            host: 'localhost',
            port: 8080,
            proxy: {
                  // webpack遇到以'/api'开头的请求默认执行以下代理
                  '/api': {
                        // 将'/api'开头的请求转发到target下的服务器主机（即api拼接到目的服务器主机）
                        target: 'https://www.imooc.com',
                        // true将浏览器的请求头中的服务器主机设置为target（但是chrome调试工具展示还是本地）；false则还是设置为本地
                        changeOrigin: true,
                        // 代理过程中将'/api'视为空，即与真实服务器主机没有关系，只作为一个识别；当然'/api'也可以不为空
                        pathRewrite: {
                              '/api': ''
                        }
                  }
            }
      }
}