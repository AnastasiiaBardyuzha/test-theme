<template>
  <div class="home">
    <div class="pass">
      <router-link to="#" class="pass__link pass__link_visited">Home</router-link>
      <span>/</span>
      <router-link to="#" class="pass__link pass__link_visited">Test Theme</router-link>
      <span>/</span>
      <router-link to="#" class="pass__link">Lorem Ipsum Dolor Sit Ame</router-link>
    </div>
    <h2 class="home__title">Lorem Ipsum Dolor Sit Amet</h2>
  </div>
</template>

<script>


export default {
  data () {
    return {
    
    }
  }

}
</script>

<style lang="scss">
  @import "../utils/_mixins.scss";
  @import "../utils/_vars.scss";

  .pass {
    display: block;
    text-align: center;
    font-size: 13px;
    font-weight: 300;
    color: $link-content-color;
    margin-bottom: 15px;

    &__link {
      @include reset-link;
      color: $link-content-color;
      display: inline-block;
      margin: 0 20px;
    }

    &__link_visited {
      color: $pass-visited-link;
    }
  }

  .home {
    &__title {
      @include head;
      @include main-color-head;
      @include big-head;
      text-align: center;
      margin-bottom: 35px;
    }
  }
</style>
