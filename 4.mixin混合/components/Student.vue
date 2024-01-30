<script>
//引入一个混合
import {mixin} from '@/mixin'

export default {
  name: 'StudentName',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
  mixins: [mixin]

}
</script>

<template>
  <div class="School">
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2></h2>
  </div>
</template>
