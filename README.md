这个项目是基于[vue-cli3]创建的.
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
    └── store.js
```


## 公共组件规范
```
# 公共组件命名规范
components
    └── ComToast //大驼峰命名、以Com开头
        └── img
        └── ComToast.vue
        └── index.js

# 公共组件 state 规范
 store
    ├── modules
    │    └── common.js
    └── types.js
    └── index.js

common.js（公共组件 放这里）
    state命名规则： com组件名
    例如：comToast

types.js（公共组件对应的 types）
    type命名规则：COM_组件名_其他
    例如：COM_TOAST
```




