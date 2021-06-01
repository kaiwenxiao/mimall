let baseURL;
switch (process.env.NODE_ENV) {
      case 'dev':
            baseURL = 'http://dev-mall-pre.spring';
            break;

      default:
            break;
}
export default {
      baseURL
}