<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {School, Student},
}
</script>

<template>
  <div>
    <school/>
    <hr>
    <student/>
  </div>
</template>
