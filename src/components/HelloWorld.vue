<template>
  <div class="hello">
    <h1>Hello components</h1>
    <section>
      <header> tags</header>
      <ul>
        <li v-for="(item,index) in bookMsg.tags" :key="index">
          {{item.name }}
          <br>
          {{item.count}}
        </li>
      </ul>
    </section>


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
      getDetail:'getDetail'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
