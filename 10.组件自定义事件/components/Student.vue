<script>
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
      this.$emit('rika', this.name)
      this.$emit('demo', )
    },
    unbind(){
      // this.$off('rika') //解绑一个自定义事件
      // this.$off(['rika', 'demo']) //解绑多个自定义事件
      this.$off() //解绑所有自定义事件
    }
  }

}
</script>

<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">点我把学生名给APP</button>
    <button @click="unbind">解绑rika事件</button>
  </div>
</template>

<style lang="css" scoped>
.demo{
  background-color: orange;
  padding: 5px;
}
</style>