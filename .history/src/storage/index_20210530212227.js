/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
      // 存储Storage值
      setItem(key, value, ) {

      },
      // 获取某一模块下Storage值，例如user对象下的userName属性（Property）的值（Key）
      getItem(key, module_name) {
            if (module_name) {
                  let val = this.getItem(module_name);
                  if(val) return val[key];
            }
            return his.getStorage()[key];
      },
      // 获取浏览器某个Storage
      getStorage() {
            //浏览器 Storage都是字符串，需要自己转换为JSON
            return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
      },
      clear() {

      }
}