<script>
export default {
  name: 'UserFooter',
  props: ['todos'],
  computed: {
    doneTodo() {
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0);
    },
  },
  methods:{
    checkAll(e){
      // this.checkAllTodo(e.target.checked)
      this.$emit('checkAllTodo', e.target.checked)
    },
    clearAll(){
      this.$emit('clearAllTodo')
    }
  }
}
</script>

<template>
  <div>
    <div class="todo-footer" v-show="!todos.length">
    <span>
      无任务
    </span>
    </div>
    <div class="todo-footer" v-show="todos.length" @click="checkAll">
      <label>
        <input type="checkbox" :checked="doneTodo === todos.length && todos.length > 0"/>
      </label>
      <span>
          <span>已完成{{ doneTodo }}</span> / 全部{{ todos.length }}
        </span>
      <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
  </div>
</template>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>