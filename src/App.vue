<template>
  <main>
    <header>
      <h1 class="task-header">Vue Tasks App</h1>
      <img src="./assets/vue.png" alt="vue icon">
    </header>
    <Home />
  </main>
</template>

<script>

  import Home from './views/Home.vue'

  export default {
    components: { Home },
    setup() {


      return {}
    }
  }
</script>

<style>
header{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.task-header {
  background: transparent;
}

img {
  width: 100px;
  height: 100px;
  background: transparent;
}

</style>