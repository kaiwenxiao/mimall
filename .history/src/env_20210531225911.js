let baseURL;
switch (process.env.NODE_ENV) {
      case 'dev':
            baseURL = 'http://'
            break;

      default:
            break;
}
export default {
      baseURL
}