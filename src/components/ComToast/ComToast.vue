<template>
  <div class="wrap Flex FlexVer FlexHor" v-show="comToast.isShow">
    <div class="mask"></div>
    <section class="toast">
      <img class="img"  :src="imgUrl" alt="">
      <p class="text">{{ comToast.title}}</p>
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
        timer:null,
      }
    },
    computed:{
      ...mapGetters({
        comToast:'comToast'
      }),
      isShow(){
        return this.comToast.isShow;
      },
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
    },
    mounted(){
    },
    //对象属性watch
    watch:{
      isShow(newVal){
        newVal && this.closeToast();
      }
    },
    methods:{
      closeToast(){
        let { duration }=this.comToast;
        this.timer && clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
          this.$store.commit('COM_TOAST',{
            isShow:false
          })
        },duration);
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap{

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
      width: 6.25rem;
      height: 6.25rem;
      background: rgba(0,0,0,0.65);
      text-align: center;
      border-radius: 10px;
      color: #fff;
      .img{
        padding-top: 1.5rem;
        display: block;
        margin: 0 auto;
        width: 2rem; height: 2rem;
      }
      .text{
        font-size: 0.6rem;
        margin-top: 0.75rem;
        line-height: 1.125rem;
      }
    }
  }
</style>