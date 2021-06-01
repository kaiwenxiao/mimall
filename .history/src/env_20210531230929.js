let baseURL;
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
            
            break;
}
export default {
      baseURL
}