<script>
export default {
  name: "MyDetail",
  props:['id', 'title']
}
</script>

<template>
<ul>
  <li>消息编号: {{ id }}</li>
  <li>消息标题: {{ title }}</li>
</ul>
</template>

<style scoped>

</style>