<script>
import '@/static/plugins/bootstrap-3.4.1/css/bootstrap.css'
import Search from "@/components/SearchUser.vue";
import User from "@/components/UserList.vue";

export default {
  name: 'App',
  components: {Search, User}
}
</script>

<template>
  <div id="root">
    <div id="app">
      <div class="container">
        <Search></Search>
        <User></User>
      </div>
    </div>
  </div>

</template>