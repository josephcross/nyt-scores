<template>
    <div class="app" id="app">
        <router-view />
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
    html, body {
        margin: 0;
    }

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      // background: #f5f6fa;
      box-sizing: border-box;
    }
</style>