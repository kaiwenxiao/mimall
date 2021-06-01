let baseURL;
switch (process.env.NODE_ENV) {
      case 'dev':
            baseURL = 'http://dev-mall-pre.springbot.cn';
            break;

      default:
            break;
}
export default {
      baseURL
}