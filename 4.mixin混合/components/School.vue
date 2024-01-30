<script>
import {mixin} from "@/mixin";

export default {
  name: 'SchoolName',
  data() {
    return {
      name: 'WYU',
      address:'JM'
    }
  },
  mixins: [mixin]

}
</script>

<template>
  <div class="School">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2></h2>
  </div>
</template>
