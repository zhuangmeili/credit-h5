<template>
  <div>
    <form action="">
      <ul class="formList">
        <li class="formItem">
          <input class="input" type="text" v-model="formData.name" placeholder="请输入名字">
        </li>
        <li class="formItem">
          <input class="input" type="number" v-model="formData.age" placeholder="年龄">
        </li>
        <li class="formItem">
          <input class="input" type="text" v-model="formData.school" placeholder="学校">
        </li>

        <li class="formItem">
          <input class="submit" type="button" value="提交表单" @click="submitForm">
        </li>
      </ul>
    </form>
    <com-modal @cancel="modalCancel" @confirm="modalConfirm"></com-modal>
  </div>
</template>

<script>
  export default {
    name: "FormView",
    data(){
      return{
        formData:{
          name:'',
          age:'',
          school:''
        }

      }
    },
    methods:{
      submitForm(){
        this.$store.commit('COM_MODAL',{
          isShow:true
        });
      },
      modalCancel(){
        this.$store.commit('COM_MODAL',{
          isShow:false
        });
        console.log('cancel');
      },
      modalConfirm(){
        console.log('confirm');
      }
    }
  }
</script>

<style scoped lang="scss">
  .formList{
    padding: 0.7rem;

    .formItem{
      margin-top: 0.4rem;
      .input{
        border: 1px solid #ddd;
        font-size: 0.7rem;
        line-height: 2rem;
        height: 2rem;
        padding: 0 0.3rem;
        width: 100%;
        display: block;
        box-sizing: border-box;
      }
      .submit{
        background: #3db1ff;
        color: #fff;
        padding: 0.2rem 0.5rem;
        border-radius: 0.2rem;
      }
    }
  }
</style>