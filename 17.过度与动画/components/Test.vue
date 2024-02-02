<script>
export default {
  name: 'myTest',
  data() {
    return {
      isShow: true,
    }
  },
}
</script>

<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
    <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<style scoped>
h1 {
  background-color: orange;
}

.hello-enter-active{
  animation: rika 0.5s linear;
}

.hello-leave-active{
  animation: rika 0.5s linear reverse;
}

@keyframes rika {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>