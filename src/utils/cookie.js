export const cookie={
  get(name){
    var cookiestr = document.cookie
    if (cookiestr == null || cookiestr == "")
      return null
    var cookieArrs = cookiestr.split(";")
    for (var i = cookieArrs.length - 1; i >= 0; i--) {
      var cookiekvstr = cookieArrs[i].replace(/^\s+|\s+$/g, '')
      var kv = cookiekvstr.split("=")
      var key = kv[0]
      var value = decodeURIComponent(kv[1])
      if (key == name) {
        return value
      }
    }
  },
  set(name, value, expiredays, domain){
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + "=" + escape(value) + ";path=/" + ((expiredays == null)
      ? ""
      : ";expires=" + exdate.toGMTString()) + (!domain
      ? ""
      : ";domain=." + domain)
  }

};
