<template>
  <div class="wrap Flex FlexVer FlexHor" v-show="comModal.isShow">
    <main class="main">
      <header class="header">{{comModal.title}}</header>
      <section class="body">{{comModal.content}}</section>
      <footer class="footer">
        <button type="button" class="btn btnCancel" @click="onCancel">取消</button>
        <button type="button" class="btn btnOk" @click="onConfirm">确定</button>
      </footer>
    </main>
  </div>
</template>

<script>
  /**
   * 向父组件传递两个事件 cancel confirm ，使用方法如下
   * <com-modal @cancel="modalCancel" @confirm="modalConfirm"></com-modal>
   *
   * */
  import { mapGetters } from 'vuex';
  export default {
    name: "ComModal",
    data(){
      return{

      }
    },
    computed:{
      ...mapGetters({
        comModal:'comModal'
      })
    },
    methods:{
      onCancel(){
        this.$emit('cancel');
      },
      onConfirm(){
        this.$emit('confirm');
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap{
    background: rgba(0,0,0,0.65);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    .main{
      width: 10rem;
      background: #fff;
      border-radius: 0.5rem;
      padding-bottom: 1rem;
      .header{
        line-height: 2rem;
        text-align: center;
        font-size: 0.7rem;
        border-bottom: 1px solid #ddd;
      }
      .body{
        padding:1rem 0.5rem;
        text-align: center;
        font-size: 0.8rem;

      }
      .footer{
        text-align: center;
        .btn{ border-radius: 0.1rem; margin: 0 0.4rem; font-size: 0.7rem; line-height: 1.5rem;
          padding: 0 1rem;}
        .btnCancel{
          background: #ccc;
          color: #666;
        }
        .btnOk{
          background: #3db1ff;
          color: #fff;
        }
      }
    }

  }
</style>