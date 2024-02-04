<script>
import 'animate.css';
export default {
  name: 'UserList',
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      Users: [],
    }
  },
  mounted() {
    this.$bus.$on('updateUser', (UserObj) => {
      this.Users = UserObj.Users
      this.isFirst = UserObj.isFirst
      this.isLoading = UserObj.isLoading
      this.errMsg = UserObj.errMsg
      console.log(this.Users)
    })
  }
}
</script>

<template>
  <div class="row">
    <div class="card" v-for="user in this.Users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <h1 v-show="isFirst"
        class="animate__animated animate__bounce animate__flash"
    >欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="isLoading" class="animate__animated animate__bounce animate__flash">加载中....</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="errMsg">{{ errMsg }}</h1>
  </div>
</template>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>