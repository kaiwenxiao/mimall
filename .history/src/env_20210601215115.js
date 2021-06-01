let baseURL;
/**
 * 配置环境变量
 * 这是对于跨域请求CROS和JSONP做的配置，接口代理的方式不需要，只需要在vue.config.js中修改下url就可以了
 */
// Nodejs--process.env.NODE_ENV 取 package.json(webpack) 中的script
switch (process.env.NODE_ENV) {
      case 'devel':
            baseURL = 'http://dev-mall-pre.springbot.cn/api';
            break;
      case 'test':
            baseURL = 'http://test-mall-pre.springbot.cn/api';
            break;
      case 'prod':
            baseURL = 'http://mall-pre.springbot.cn/api';
            break;
      default:
            baseURL = 'http://mall-pre.springbot.cn/api';
            break;
}
export default {
      baseURL
}