<script>
import axios from "axios";
export default {
  name: 'SearchUser',
  data(){
    return{
      keyword:'',
    }
  },
  methods:{
    getUser(){
      if(!this.keyword.trim()) return alert('输入不能为空');
      this.$bus.$emit('updateUser',{isLoading:true,errMsg:'',users:[],isFirst:false})
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          response => {
            //console.log(response.data.items)
            this.$bus.$emit('updateUser', {
              isLoading:false,
              errMsg:'',
              isFirst:false,
              Users:response.data.items
            })
          },
          reason => {
            this.$bus.$emit('updateUser', {
              isLoading:false,
              errMsg:reason.message,
              isFirst:false,
              Users:[]
            })
          }
      )
    }
  }
}

</script>

<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword" @keyup.enter="getUser"/>&nbsp;
      <button class="btn btn-primary" @click="getUser">Search</button>
    </div>
  </section>
</template>

<style scoped>

</style>