<script>
export default {
  name: 'UserItem',
  props: ['todo'],
  //声明接收todo对象

  methods: {
    handleCheck(id) {
      //取反down
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    handelDelete(id, title) {
      if (confirm('确定删除 ' + title + ' 事件吗?')) {
        // this.deleteTodo(id);
        this.$bus.$emit('deleteTodo', id)
      }
    }
  }
}
</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handelDelete(todo.id, todo.title)">删除</button>
  </li>
</template>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #dddddd;
}

li:hover button {
  display: block;
}
</style>