<template>
  <div class="wrap Flex FlexVer FlexHor" v-show="comToast.isShow">
    <div class="mask"></div>
    <section class="toast">
      <img class="img"  :src="imgUrl" alt="">
      <p class="text">{{ comToast.title || 'loading'}}</p>
    </section>
  </div>
</template>

<script>
  /**
   *
   *
   * */
  import { mapGetters } from 'vuex';
  export default {
    name: "ComToast",
    data(){
      return{
      }
    },
    computed:{
      ...mapGetters({
        comToast:'comToast'
      }),
      imgUrl(){
        let icon=this.comToast.icon;
        let url='';
        switch(icon){
          case 'success' :
            url = require('./img/success.png');
            break;
          case 'error' :
            url = require('./img/error.png');
            break;
          default:
            url = require('./img/loading.png');
            break;
        }
        return url;
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    z-index: 9999;
    .mask{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.4);

    }
    .toast{
      position: relative;
      width: 250px;
      height: 250px;
      background: rgba(0,0,0,0.65);
      text-align: center;
      border-radius: 10px;
      color: #fff;
      .img{
        padding-top: 60px;
        display: block;
        margin: 0 auto;
        width: 80px; height: 80px;
      }
      .text{
        font-size: 24px;
        margin-top: 30px;
        line-height: 45px;
      }
    }
  }
</style>