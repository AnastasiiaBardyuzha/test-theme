<template>
  <div id="app">
    <div class="wrapper">
      <Header /> 
      <main class="main">
       <router-view/>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./utils/_vars.scss";

  * {
    box-sizing: border-box;
    outline: none;
    font-family: $font-family-main;
  }

  .wrapper {
    display: block;
    max-width: 1280px;
    margin: 0 auto;
  }

  .main {
    background: $main-background;
    padding: 0 55px;
  }

</style>
<script>
  import Header from './components/Header/Header.vue'

  export default {
    components: {
      Header
    }
  }
</script>  
