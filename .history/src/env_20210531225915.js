let baseURL;
switch (process.env.NODE_ENV) {
      case 'dev':
            baseURL = 'http://dev-';
            break;

      default:
            break;
}
export default {
      baseURL
}