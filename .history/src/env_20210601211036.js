let baseURL;
// Nodejs--process.env.NODE_ENV 取 package.json(webpack) 中的
switch (process.env.NODE_ENV) {
      case 'dev':
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