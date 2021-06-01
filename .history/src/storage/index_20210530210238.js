/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
      // 存储Storage值
      setItem(){

      },
      // 获取Storage值
      getItem(){

      },
      // 获取浏览器所有的Storage
      getStorage(){
            //浏览器 Storage都是字符串
            window.sessionStorage.getItem(STORAGE_KEY)  || '{}'
      },
      clear(){
              
      }
}