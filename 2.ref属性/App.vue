<script>
import School from './components/School.vue'

export default {
  name: 'App',
  components: {School},
  data() {
    return {
      msg: '欢迎学习Vue',
    }
  },
  methods:{
    showDom(){
      console.log(this.$refs)
    }
  }
}
</script>

<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的DOM元素</button>
    <school/>
  </div>
</template>
