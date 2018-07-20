// 判断是否在微信内
export const validate={
  isWechat(){
    let ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger'
  },
  isMobile(val){
    return /^1[3456789]\d{9}$/.test(val)
  },
  isPrice(val){
    return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(val);
  }
};
