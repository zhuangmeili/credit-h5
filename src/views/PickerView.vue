<template>
  <div>
    <header class="title"> picker 组件编写</header>
    <div>picker</div>

    <div class="pickerWrap Flex FlexVerEnd">
      <main class="pickerCon Flex1">
        <header class="pickerHead Flex ">
          <button type="button" class="cancel">取消</button>
          <div class="Flex1">选择城市</div>
          <button type="button" class="confirm">确定</button>
        </header>

        <!-- body -->
        <div class="pickerBody" ref="pickerBody">
          <div class="maskTop"></div>
          <div class="maskBottom"></div>
          <div class="pickerBody Flex">
            <!-- column1 -->
            <div class="pickerWheel Flex1 HackWidth">
              <ul class="pickerUl" :style="{transform: `translateY(${nowTranslateY}px)`}" :class="isTransition?'transitionEase':''">
                <li class="item" v-for="(item,index) in address" :key="index">
                  {{item.name}}-{{item.value}}
                </li>
              </ul>
            </div>
            <!-- column2 -->
          </div>
        </div>
        <!-- footer -->
        <footer class="pickerFoot"></footer>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PickerView",
    data() {
      return {
        address: [
          {name: "北京", value: 101},
          {name: "上海", value: 102},
          {name: "天津", value: 103},
          {name: "珠海", value: 104},
          {name: "石家庄", value: 105},
          {name: "乌鲁木齐", value: 1056},
        ],
        schools: [
          {name: "北京大学", value: 200},
          {name: "复旦大学", value: 201},
        ],
        el:null,  //绑定事件
        elUl:null, //滚动的元素

        isTouch:false,
        isTransition:false,
        startY:0,
        endY:0,
        disY:0,
        initTranslateY:0, //初始化 translateY
        isUp:false, //  下拉
      }
    },
    mounted(){
      this.bindTouchEvent();
    },
    computed:{
      nowTranslateY() {
        let distance=this.initTranslateY + this.disY;
        console.log(distance);
        return distance;
      }
    },
    methods:{
      // 绑定touch事件
      bindTouchEvent(){
        this.el=this.$refs['pickerBody'];
        this.elUl=this.el.querySelector('pickerUl');
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
        this.initTranslateY=this.initTranslateY+this.disY;
        this.disY=0;
        this.isTouch=true;
        this.isTransition=false;
      },
      _touchMove(e){
        this.endY=e.targetTouches[0].pageY;
        this.disY=this.endY - this.startY;
      },
      _touchEnd(){
        this.isTouch=false;
        this.isTransition=true;
        //disY>0 下拉
        this.isUp=this.disY<0;
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../assets/css/border";
  .pickerWrap {
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .pickerCon {
      background: #fff;
      .pickerHead {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 19px;
        .title {
          color: #333;
        }
        .cancel, .confirm {
          padding: 0 15px;
          background: #fff;
          font-size: 14px;
        }
        .cancel {
          color: #878787;
        }
        .confirm {
          color: #FA8917;
        }

      }
      .pickerBody {
        position: relative;
        .maskTop, .maskBottom {
          position: absolute;
          left: 0;
          width: 100%;
          height: 68px;
          z-index: 2;
          box-sizing: border-box;
        }
        .maskTop {
          top: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
          &:after{
            @include BorBottom(#ddd);
          }
        }
        .maskBottom {
          bottom: 0;
          background: linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
          &:after{
            @include BorTop(#ddd);
          }
        }
        .pickerWheel {
          height: 173px;
          overflow: hidden;
          font-size: 21px;
          ul{
            margin-top: 68px;
            li {
              line-height: 36px;
              height: 36px;
              text-align: center;
            }
          }
          ul.transitionEase{transition: all 0.3s ease}
        }
      }
      .pickerFoot {
        height: 20px;
      }

    }
  }
</style>