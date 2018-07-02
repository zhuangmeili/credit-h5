<template>
  <div class="refWrap" :class="isTransition?'refHeadTrans':''" ref="refWrap">
    <div class="refHead Flex FlexVer FlexHor ">
      <img class="img" :class="isRefresh?'refHeadLoading':''" src="./img/refresh.png" alt="">
      <div class="text">{{tipText}}</div>
    </div>
    <div class="refBody">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ComRefresh",
    data(){
      return{
        startY:0,
        endY:0,
        disY:0,
        isTouching:false,
        isRefresh:false,  //正在刷新中
        isTransition:false, //transition
        tipText:'松开刷新',
        refHeight:30,// 默认高度为 30px
        el:null,  //下拉区域
      }
    },
    props:{
      refresh:Function
    },
    mounted(){
      this.bindTouchEvent();
    },
    methods:{
      // 绑定touch事件
      bindTouchEvent(){
        this.el=this.$refs['refWrap'];

        this.el.addEventListener('touchstart',(e)=>{
          this._touchStart(e)
        });
        this.el.addEventListener('touchmove',(e)=>{
          this._touchMove(e)
        });
        this.el.addEventListener('touchend',(e)=>{
          this._touchEnd(e);
        });
      },
      _touchStart(e){
        this.startY=e.targetTouches[0].pageY;
        this.isTouching=true;
        this.isTransition=false;
        this.tipText='松开刷新';
      },
      _touchMove(e){
        if(!this.isTouching){
          return false;
        }
        // 获得移动距离
        this.endY=e.targetTouches[0].pageY;
        this.disY=this.endY -this.startY;
        // 判断下拉还是上拉 disY>0 下拉
        if (this.disY>0){
          e.preventDefault();
          this.el.style.transform=`translateY(${parseInt(this.disY)}px)`;
        } else{
          return false;
        }
      },
      _touchEnd(){
        this.isTouching=false;
        this.isTransition=true;
        this.el.style.transform=`translateY(${this.refHeight}px)`;
        // stauts1 下拉距离比较小的话，不进行刷新
        if(this.disY<30){
          this._reset();
          return false;
        }

        // status2 进行刷新
        this.isRefresh=true;
        this.tipText='刷新中...';
        //刷新数据 reset 回调
        this.refresh(()=>{
          this._reset()
        })
      },
      _reset(){
        this.el.style.transform=`translateY(0)`;
        this.isRefresh=false;
      }
    }
  }
</script>

<style scoped>
  /* 松开刷新， 刷新中 */
  .refWrap{ transform: translateY(0); }
  .refHead{ height: 30px; margin-top: -30px; }
  .refHead .img{  width: 16px; height: 16px; opacity: 0.3; }
  .refHead .text{margin-left: 5px; line-height: 24px; color: #333; font-size: 12px; }
  .refHeadTrans{transition: all 0.3s ease}
  /* 加载中 img   addClass pullLoading*/
  .refHeadLoading{ animation: refHeadAnimation 0.8s linear infinite;}
  @keyframes refHeadAnimation {
    0%{
      transform: rotate(0deg);}
    100%{
      transform:  rotate(360deg);
    }
  }
</style>