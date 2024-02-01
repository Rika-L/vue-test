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

   

## 3-props属性

功能：让组件接收外部传过来的数据

传递数据：

```vue
<student name="李四" sex="女" :age="18"/>
```

接收数据：

三个方法：

1. 简单方法,仅接收

```vue
props:['name', 'sex', 'age'],
```

2. 接收的同时限制类型

```vue
props: {
  name: String,
  age: Number,
  sex: String,
}
```

3.接收的同时限制类型,默认值指定,必要性限制

```
props: {
  name: {
    type: String,//类型是字符串
    required: true,//name是必要的
  },
  age: {
    type: Number,
    default: 99,//默认值
  },
  sex: {
    type: String,
    required: true,
  }
}
```

> 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

## 4.mixin混入（合）

局部混合

```js
export const mixin = {
    methods: {
        showName()
        {
            alert(this.name);
        }
    }
}
```

```vue
//引入一个混合
import {mixin} from '@/mixin'
```

再写配置

```vue
mixins: [mixin]
```



全局混合

```js
Vue.mixin(xxx)
```

在main.js中引入与混合

## 5.插件

定义插件

```js
const obj = {
    install(){
        console.log('@@@install')
    }
}
export default obj;
```

使用插件
```js
//引入插件
import plugins from './plugins'

//应用插件
Vue.use(plugins)
```

功能：增强Vue

本质：包含install方法的一个对象，第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

## 6.scoped样式

```vue
<style scoped>

</style>
```

局部作用域

样式在局部生效

防止冲突

## 总结TodoList案例

1. 组件化编码流程：

    ​	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

    ​	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

    ​			1).一个组件在用：放在组件自身即可。

    ​			2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。

    ​	(3).实现交互：从绑定事件开始。

2. props适用于：

    ​	(1).父组件 ==> 子组件 通信

    ​	(2).子组件 ==> 父组件 通信（要求父先给子一个函数）

3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！

4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## webStorage

1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。

3. 相关API：

    1. ```xxxxxStorage.setItem('key', 'value');```
        			该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

    2. ```xxxxxStorage.getItem('person');```

        该方法接受一个键名作为参数，返回键名对应的值。

    3. ```xxxxxStorage.removeItem('key');```

        该方法接受一个键名作为参数，并把该键名从存储中删除。

    4. ``` xxxxxStorage.clear()```

        该方法会清空存储中的所有数据。

4. 备注：

    1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
    2. LocalStorage存储的内容，需要手动清除才会消失。
    3. ```xxxxxStorage.getItem(xxx)```如果xxx对应的value获取不到，那么getItem的返回值是null。
    4. ```JSON.parse(null)```的结果依然是null。

## 9.组件自定义事件

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

3. 绑定自定义事件：

    1. 第一种方式，在父组件中：```<Demo @atguigu="test"/>```  或 ```<Demo v-on:atguigu="test"/>```

    2. 第二种方式，在父组件中：

        ```js
        <Demo ref="demo"/>
        ......
        mounted(){
           this.$refs.xxx.$on('atguigu',this.test)
        }
        ```

    3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。

4. 触发自定义事件：```this.$emit('atguigu',数据)```		

5. 解绑自定义事件```this.$off('atguigu')```

6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！
