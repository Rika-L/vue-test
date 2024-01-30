<script>
export default {
  name: 'StudentName',
  data() {
    return {
      msg: '我是一个五口巴的学生',
    }
  },
  // props:['name', 'sex', 'age'], //简单接收
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // }

  props: {
    name: {
      type: String,//类型是字符串
      required: true,//name是必要的
    },
    age: {
      type: Number,
      default: 99,//默认值
    },
    sex: {
      type: String,
      required: true,
    }
  }

}
</script>

<template>
  <div class="School">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2></h2>
  </div>
</template>
