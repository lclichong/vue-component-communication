<template>
  <div class="container">
    <h3>我是A组件</h3>
    <button @click="transform">点我让B组件接收到数据</button>
    <p>因为你点了B，所以我的信息发生了变化：{{ BMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildA',
  props: {},
  data: function () {
    return {
      AMessage: 'Hello，B组件，我是A组件'
    }
  },
  computed: {
    BMessage () {
      // 这里存储从store里获取的B组件的数据
      return this.$store.state.BMsg
    }
  },
  methods: {
    transform () {
      // 触发receiveAMsg，将A组件的数据存放到store里去
      this.$store.commit('receiveAMsg', {
        AMsg: this.AMessage
      })
    }
  }
}
</script>

<style scoped>
</style>
