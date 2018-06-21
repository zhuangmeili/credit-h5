/**
 * @author zhuang
 * get:
 *    this.$http.get({url:'', data:{}})
 * post:
 *   this.$htto.post({url:'',data:{}})
 *
 * */
import axios from 'axios';

let config = {
  timeout:10000,
  //headers:{ 'X-Requested-With': 'XMLHttpRequest'},
};


export default {
  get(option){
    //  注意 config参数的位置
    let {url, data = {}}=option;
    return new Promise((resolve, reject)=>{
      axios.get(url,{params: data, ...config}).then(res=>{
        resolve(res.data);
      }).catch(error=>{
        reject({message: '页面溜走了，请稍后重试', error: error});
      });
    });
  },
  post(option){
    let {url, data = {}}=option;
    return new Promise((resolve, reject) => {
      axios.post(url,{data: data, ...config} ).then(res=>{
        resolve(res.data);
      }).catch(error=>{
        reject({message: '页面溜走了，请稍后重试', error: error});
      });
    })
  },
  put(option){
    let {url, data = {}}=option;
    return new Promise((resolve, reject) => {
      axios.put(url,{data: data, ...config}).then(res=>{
        resolve(res.data);
      }).catch(error=>{
        reject({message: '页面溜走了，请稍后重试', error: error});
      });
    })
  },
  delete(option){
    let {url, data = {}}=option;
    return new Promise((resolve, reject) => {
      axios.delete(url,{data: data, ...config}).then(res=>{
        resolve(res.data);
      }).catch(error=>{
        reject({message: '页面溜走了，请稍后重试', error: error});
      });
    })
  }
  // other
}
