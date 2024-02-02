<script>
import pubsub from 'pubsub-js'
export default {
  name: 'StudentName',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
  methods:{
    sendStudentName(){
      pubsub.publish('hello', 666)
    }
  }


}
</script>

<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给school</button>
  </div>
</template>

<style lang="css" scoped>
.demo{
  background-color: orange;
  padding: 5px;
}
</style>