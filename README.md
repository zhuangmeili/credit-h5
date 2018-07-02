这个项目是基于[vue-cli3](https://cli.vuejs.org/ "vue-cli3")创建的.
## vue-cli指令
  - npm install -g @vue/cli //全局安装vue-cli
  - vue create projectName  //创建项目
  - vue -h(vue --help)      //查看vue帮助
  - vue -V(vue --version)   //vue版本

## 项目指令
  - npm install    //安装本地依赖
  - npm run serve  //开发环境
  - npm run build  //生产环境
  - npm i axios -S //axios依赖

```
credit-h5
├── node_modules
├── .eslintrc.js
├── .gitignore.js
├── .postcssrc.js
├── babel.config.js
├── package.json
├── README.md
├── vue.config.js
├── public
│   └── img
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── assets
    └── components
    └── views
    └── App.vue
    └── main.js
    └── router.js
    └── store
```


## 组件、状态规范
#### 目录结构
```
components
    └── ComToast
    │   └── img
    │   └── ComToast.vue
    │   └── index.js
 store
    ├── modules
    │    └── common.js
    │    └── md1.js
    │    └── md2.js
    └── types.js
    └── index.js
```
#### 组件规范
1. 组件命名规则
    - 大驼峰
    - Com 开头
    - 例如: ComToast、 ComModal
1. 组件目录结构
    - 尽量按照如上目录
    - img为与组件极大关联的图片

#### store规范
1. store
    - modules   //其他模块 状态管理
    - md1.js    // md1模块的状态管理
    - common.js //为公共组件的 状态管理文件
    - types.js  //为公共组件的 types
    - index.js  //所有的 state

1. md1.js 规则
    - md1.js 的 types 放在 locals 对象下；

1. common.js 规则
    - state规则:
        - 小驼峰
        - com 开头
        - com+组件名+其他
        - 请结合公共组件命名，如组件 ComModal， state 为comModal
        - 例如：comModal、comToast

1. types.js 规则
    - 大写字母，下划线隔开
    - COM+组件名+其他
    - 例如：COM_MODAL、COM_TOAST

## components
#### ComModal 弹窗
```javascript
# ComModal.vue (ComModal向父级组件发送两个事件，cancel 、 confim)
methods:{
  onCancel(){
    this.$emit('cancel');
  },
  onConfirm(){
    this.$emit('confirm');
  }
}
# common.js (state 默认值)
comModal:{
    isShow:false,
    isCancel:true,
    isConfirm:true,
    title:'提示',
    content:'这是一个模态弹窗'
  },
```

```html
<template>
  <div>
    <com-modal @cancel="modalCancel" @confirm="modalConfirm"></com-modal>
  </div>
</template>
```
#### ComToast toast提示

#### ComRefresh 下拉刷新




