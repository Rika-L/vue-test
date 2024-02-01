<script>
export default {
  name: 'StudentName',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },


}
</script>

<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<style lang="css" scoped>
.demo{
  background-color: orange;
  padding: 5px;
}
</style>