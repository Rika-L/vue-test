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
        showName() {
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
    install() {
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

   ​    (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

   ​    (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

    1).一个组件在用：放在组件自身即可。

    2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。

   ​    (3).实现交互：从绑定事件开始。

2. props适用于：

   ​    (1).父组件 ==> 子组件 通信

   ​    (2).子组件 ==> 父组件 通信（要求父先给子一个函数）

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

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">
   事件的回调在A中</span>）。

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

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">
   要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！

## 10.全局事件总线

任意组件间通信

![c8c58db62b6e7ac8a920890ab910925](D:\wechatfile\WeChat Files\wxid_0z1kzagu3rpg22\FileStorage\Temp\c8c58db62b6e7ac8a920890ab910925.jpg)

1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 安装全局事件总线：

   ```js
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   	},
       ......
   }) 
   ```

3. 使用事件总线：

    1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身。</span>

       ```js
       methods(){
         demo(data){......}
       }
       ......
       mounted() {
         this.$bus.$on('xxxx',this.demo)
       }
       ```

    2. 提供数据：```this.$bus.$emit('xxxx',数据)```

4. 最好在beforeDestroy钩子中，用$off去解绑<span style="color:red">当前组件所用到的</span>事件。

## nextTick

1. 语法：```this.$nextTick(回调函数)```
2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## Vue封装的过度与动画

1. 作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名。

2. 写法：

    1. 准备好样式：

        - 元素进入的样式：
            1. v-enter：进入的起点
            2. v-enter-active：进入过程中
            3. v-enter-to：进入的终点
        - 元素离开的样式：
            1. v-leave：离开的起点
            2. v-leave-active：离开过程中
            3. v-leave-to：离开的终点

    2. 使用```<transition>```包裹要过度的元素，并配置name属性：

       ```vue
       <transition name="hello">
           <h1 v-show="isShow">你好啊！</h1>
       </transition>
       ```

    3. 备注：若有多个元素需要过度，则需要使用：```<transition-group>```，且每个元素都要指定```key```值。

## 插槽

1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===>
   子组件</strong> 。

2. 分类：默认插槽、具名插槽、作用域插槽

3. 使用方式：

    1. 默认插槽：

       ```vue
       父组件中：
               <Category>
                  <div>html结构1</div>
               </Category>
       子组件中：
               <template>
                   <div>
                      <!-- 定义插槽 -->
                      <slot>插槽默认内容...</slot>
                   </div>
               </template>
       ```

    2. 具名插槽：

       ```vue
       父组件中：
               <Category>
                   <template slot="center">
                     <div>html结构1</div>
                   </template>
       
                   <template v-slot:footer>
                      <div>html结构2</div>
                   </template>
               </Category>
       子组件中：
               <template>
                   <div>
                      <!-- 定义插槽 -->
                      <slot name="center">插槽默认内容...</slot>
                      <slot name="footer">插槽默认内容...</slot>
                   </div>
               </template>
       ```

    3. 作用域插槽：

        1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>
           （games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）

        2. 具体编码：

           ```vue
           父组件中：
                   <Category>
                       <template scope="scopeData">
                           <!-- 生成的是ul列表 -->
                           <ul>
                               <li v-for="g in scopeData.games" :key="g">{{g}}</li>
                           </ul>
                       </template>
                   </Category>
           
                   <Category>
                       <template slot-scope="scopeData">
                           <!-- 生成的是h4标题 -->
                           <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
                       </template>
                   </Category>
           子组件中：
                   <template>
                       <div>
                           <slot :games="games"></slot>
                       </div>
                   </template>
                   
                   <script>
                       export default {
                           name:'Category',
                           props:['title'],
                           //数据在子组件自身
                           data() {
                               return {
                                   games:['红色警戒','穿越火线','劲舞团','超级玛丽']
                               }
                           }, 
                       }
                   </script>
           ```