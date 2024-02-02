<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: '你好呀',
    }
  },
}
</script>

<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <school></school>
    <student></student>

  </div>
</template>

<style>
.app {
  background-color: #dddddd;
  padding: 5px;
}
</style>