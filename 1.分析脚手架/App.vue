<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components:{
    School,
    Student,
  }
}
</script>

<template>
  <div>
  <img src="./assets/logo.png" alt="logo">

    <school></school>
    <student></student>
  </div>
</template>
