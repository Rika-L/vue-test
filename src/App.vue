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
  methods: {
    getSchoolName(name) {
      alert(name)
    },
    getStudentName(name) {
      alert(name)
    },
    m1(){
      console.log('demo事件被出发了');
    }
  },
  mounted() {
    this.$refs.student.$on('rika', this.getStudentName)
  }
}
</script>

<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!--    通过父组件给子组件传递函数类型的props实现:子给父传数据-->
    <school :getSchoolName="getSchoolName"/>
    <hr>
    <!--    通过父组件给子组件绑定一个自定义事件实现:子给父传数据(第一种写法,使用v-on)-->
    <student @rika="getStudentName" @demo="m1"/>
    <!--    通过父组件给子组件绑定一个自定义事件实现:子给父传数据(第二种写法,使用ref)-->
    <student ref='student'/>
  </div>
</template>

<style>
.app {
  background-color: #dddddd;
  padding: 5px;
}
</style>