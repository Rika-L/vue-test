# vue-test

## 1-render函数

```js
new Vue({
  render: h => h(App),
})
```

解析模板

vue.js是完整版的vue

vueruntime.xxx.js是运行版的Vue,只包含核心功能,没有模板解析器

因为没有模板解析器,所以不能用template配置项,需要使用render函数去指定内容

## 1.5-修改默认配置

```cmd
vue inspect > output.js
```

vue.config.js

**脚手架文件结构**

	├── node_modules 
	├── public
	│   ├── favicon.ico: 页签图标
	│   └── index.html: 主页面
	├── src
	│   ├── assets: 存放静态资源
	│   │   └── logo.png
	│   │── component: 存放组件
	│   │   └── HelloWorld.vue
	│   │── App.vue: 汇总所有组件
	│   │── main.js: 入口文件
	├── .gitignore: git版本管制忽略的配置
	├── babel.config.js: babel的配置文件
	├── package.json: 应用包配置文件 
	├── README.md: 应用描述文件
	├── package-lock.json：包版本控制文件

1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## 2-ref

1. 被用来给元素或子组件注册引用信息

2. 应用在html标签上获取的是真是DOM，应用在组件标签上是组件实例对象vc

3. 使用方式：打标签

   ```html
   <h1 ref="xxx">
       
   </h1>
   ```

4. 获取

   ```js
   this.$refs.xxx
   ```

   
