let baseURL;
switch (process.env.NODE_ENV) {
      case 'dev':
            baseURL = 'http://dev-mall-pre.';
            break;

      default:
            break;
}
export default {
      baseURL
}