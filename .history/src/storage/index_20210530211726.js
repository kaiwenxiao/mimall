/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
      // 存储Storage值
      setItem(){

      },
      // 获取Storage值
      getItem(key, module_name){
            if (module_name){
                  let val = this
            }
            return his.getStorage()[key];
      },
      // 获取浏览器某个Storage
      getStorage(){
            //浏览器 Storage都是字符串，需要自己转换为JSON
            return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)  || '{}');
      },
      clear(){
              
      }
}