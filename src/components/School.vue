<script>
export default {
  name: 'SchoolName',
  data() {
    return {
      name: 'WYU',
      address: 'JM',
    }
  },
}
</script>

<template>
  <div class="School">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<style scoped>
.School {
  background-color: grey;
}
</style>