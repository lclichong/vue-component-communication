<template>
  <div class="container">
    <h2>父子组件通信方式4:provide和inject</h2>
    <Child></Child>
    <button @click="add">添加一条数据，看看是否是响应式</button>
  </div>
</template>

<script>
import Child from './ChildD.vue'
import Vue from 'vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  created () {
  },
  provide () {
    let parent = Vue.observable({
      array: this.array,
      getIndex: this.getIndex,
      vm: this
    })
    return {
      parent
    }
  },
  data: function () {
    return {
      array: ['我是父组件传递的值1', '我是父组件传递的值2']
    }
  },
  methods: {
    getIndex (index) {
      alert(`这是子组件传过来的下标：${index}`)
    },
    add () {
      this.array.push(`我是父组件传递的值${this.array.length + 1}`)
    }
  }
}
</script>

<style scoped>
</style>
