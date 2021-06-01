/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
      // 存储Storage值
      setItem(key, value, module_name) {
            if (module_name) {
                  let val = this.getItem(module_name);
                  val[key] = value;
                  this.setItem(module_name, val);
            } else {
                  let val = this.getStorage();
                  val[key] = value;
                  
                  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
            }
      },
      // 获取某一模块下Storage值，例如user对象下的userName属性（Property）的值（Key）
      getItem(key, module_name) {
            // 如果存在模块，例如要获得mall {"user":{"userName":"haha",age:30}}下，mall的user的值，使用递归
            if (module_name) {
                  let val = this.getItem(module_name);
                  if (val) return val[key];
            }
            // 获取浏览器某个Storage 的 Value
            return this.getStorage()[key];
      },
      // 获取浏览器某个Storage(包括Key 和 Value)
      getStorage() {
            //浏览器 Storage都是字符串，需要自己转换为JSON
            return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
      },
      clear(key, moudle_name) {
            let val = this.getStorage();
            if (moudle_name) {
                  delete val[moudle_name][key];
            } else {
                  delete val[key];
            }
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
      }
}