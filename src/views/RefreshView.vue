<template>
 <div>
  <!---->
  <com-refresh :refresh="getDetail">
   <ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
    <li>item4</li>
    <li>item5</li>
   </ul>
  </com-refresh>
 </div>
</template>

<script>
  export default {
    name: "RefreshView",
    data(){
      return{
      }
    },
    methods:{
      getDetail(reset){
        this.$http.get({
          url:'/v2/book/1220562'
        }).then((res)=>{
          console.log(res);
        }).finally(()=>{
          reset();
        })
      },
    }
  }
</script>

<style scoped>

</style>