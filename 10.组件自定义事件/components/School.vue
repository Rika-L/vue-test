<script>
export default {
  name: 'SchoolName',
  data() {
    return {
      name: 'WYU',
      address:'JM'
    }
  },
  props:['getSchoolName'],
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }

}
</script>

<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<style scoped>
  .demo{
    background-color: skyblue;
    padding: 5px;
  }
</style>