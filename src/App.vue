<template>
  <div id="app">
    <div class="wrapper">
      <Header :categories="categories"  /> 
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

  h1, h2, h3 {
    margin: 0;
  }

  .wrapper {
    display: block;
    max-width: 1280px;
    margin: 0 auto;
  }

  .main {
    background: $main-background;
    padding: 55px;
  }

</style>
<script>
  import Header from './components/Header/Header.vue'

  export default {
    components: {
      Header
    },
      data () {
    return {
      categories: null
    }
  },

  methods: {
     async getCategories() {
      const response = await fetch('https://raw.githubusercontent.com/gpupo/submarino-sdk/master/Resources/mockup/categories/list.json');
      this.categories = await response.json();
    },
  },

  mounted () {
    this.getCategories()
  }

  };
</script>  
