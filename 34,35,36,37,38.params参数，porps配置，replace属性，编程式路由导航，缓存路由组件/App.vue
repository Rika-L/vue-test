<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2>
          <button @click="back">后退</button>
          <button @click="forward">前进</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../static/plugins/bootstrap-3.4.1/css/bootstrap.css"

export default {
  name: 'App',
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
      //go方法，前进或后退几步
      //this.$router.go(1)
    }
  }
}
</script>
