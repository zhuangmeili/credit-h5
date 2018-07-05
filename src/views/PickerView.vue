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
        <ul class="pickerBody">
          <li class="pickerItem" v-for="(item,index) in address" :key="index">
            {{item.name}}--{{item.value}}
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PickerView",
    data(){
      return{
        address:[
          {name:"北京",value:101},
          {name:"上海",value:102},
          {name:"天津",value:103},
          {name:"珠海",value:104},
          {name:"石家庄",value:105},
          {name:"乌鲁木齐",value:1056},
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  .pickerWrap{
    background: rgba(0,0,0,0.6);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .pickerCon{
      background: #fff;
      .pickerHead{
        height: 44px; line-height: 44px;
        text-align: center;
        font-size: 20px;
        .title{

        }
        .cancel,.confirm{ padding: 0 15px; background: #fff;font-size: 16px; }
        .cancel{
          color: #909090;
        }
        .confirm{
          color: #EE4634;
        }

      }
      .pickerBody{
        height: 200px;
        overflow: hidden;
        li{ line-height: 40px; height: 40px; text-align: center; font-size: 26px; }
        li:nth-child(1){ transform: rotateX(40deg); opacity: 0.3;}
      }

    }
  }
</style>