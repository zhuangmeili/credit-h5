<template>
  <div class="wrap">
    <main class="main">
      <section>
        <header> tags</header>
        <ul>
          <li class="item" v-for="(item,index) in bookMsg.tags" :key="index">
            <h2 class="name">{{item.name }}</h2>
            <p class="count">{{item.count}}</p>
          </li>
        </ul>
      </section>
      <com-toast></com-toast>
      <section class="toast">
        <button type="button" class="button" @click="showToast">点击出现弹窗</button>
      </section>
    </main>

  </div>
</template>

<script>
import {  mapGetters, mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters({
      bookMsg:'bookMsg'
    })
  },
  mounted(){
    this.getDetail();
  },
  methods:{
    ...mapActions({
      getDetail:'getDetail',
    }),
    showToast(){
      this.$store.commit('COM_TOAST',{
        isShow:true
      });
    }
  }
}
</script>

<style scoped lang="scss">
  .main{
    padding:  0.7rem;
    .item{
      padding: 0.2rem;
      border-bottom: 1px solid #ddd;
      .name{
        font-size: 0.7rem;
      }
      .count{
        font-size: 0.6rem;
        color: #888;
        padding-left: 1rem;
      }
    }
    .toast{ margin-top: 20px;}
    .button{
      background: #3db1ff;
      border-radius: 2px;
      line-height: 35px;
      padding: 0 15px;
      color: #fff;
    }
  }

</style>
