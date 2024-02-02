<script>
import pubsub from 'pubsub-js'

export default {
  name: 'SchoolName',
  data() {
    return {
      name: 'WYU',
      address: 'JM'
    }
  },
  mounted() {
    this.pubid = pubsub.subscribe('hello', (msgName, data) => {
      console.log('有人发布了hello消息', msgName, data)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubid)
  }

}
</script>

<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<style scoped>
.demo {
  background-color: skyblue;
  padding: 5px;
}
</style>