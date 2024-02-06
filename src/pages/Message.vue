<script>
export default {
  name: "MyMessage",
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="n in messageList" :key="n.id">
        <!--        to的字符串写法-->
        <!--        <router-link :to="`/home/message/detail?id=${n.id}&title=${n.title}`">{{ n.title }}</router-link>&nbsp;&nbsp;-->
        <!--        to的对象写法-->
        <router-link :to="{
                  path:'/home/message/detail',
                  query:{
                    id:n.id,
                    title:n.title
                }
                }">{{ n.title }}</router-link>
        <!--        <router-link :to="`/home/message/detail/${n.id}/${n.title}`">{{ n.title }}</router-link>&nbsp;&nbsp;-->
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>
