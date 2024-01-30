<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {Student},
}
</script>

<template>
  <div>
    <student name="李四" sex="女" age="18"/>
    <student name="王老五" sex="男" age="20"/>
  </div>
</template>
