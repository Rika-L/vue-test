//该文件专门用于创建路由器
import VueRouter from "vue-router";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";

//创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,

                            //第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给组件
                            // props: {
                            //     a: 1,
                            //     b: 11,
                            // }

                            //第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数
                            //以props形式传给组件
                            // props: true,

                            //第三种写法，值为函数
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (localStorage.getItem('school') === 'wyu') {
        next();
    }
})

export default router