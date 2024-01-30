<script>
export default {
  name: 'SchoolName',
  data() {
    return {
      name: 'WYU',
      address:'JM'
    }
  },

}
</script>

<template>
  <div class="School">
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2></h2>
  </div>
</template>
