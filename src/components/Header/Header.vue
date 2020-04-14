<template>
  <header class="header">
    <router-link to="/" exact tag="a" class="header__logo">
      <img alt="Logo" src="../../assets/logo.png" class="header__logo-img"> 
    </router-link>
    <div class="header__nav-part">  
      <Nav />
      <div class="header__drops">
        <HeaderDrops />
      </div>
      <div class="header__icons"> 
        <HeaderIcons />
      </div>
    </div>
  </header>  
</template>

<style lang="scss">
@import "../../utils/_mixins.scss";

.header {
  @include flex-between-center;
  height: 76px;
  padding: 25px 55px;


  &__logo {
    display: inline-block;
    height: 26px;
    margin-right: 78px;
  }

  &__logo-img {
        height: 100%;
    }

  &__nav-part {
    @include flex-between-center;
    width: 944px;
  }

  &__icons {
    @include flex-between-center;
    width: 215px;
    padding-right: 10px;
  }

  &__drops {
    @include flex-between-center;
    width: 125px;
  }
}
</style>

<script>
  import Nav from '../Nav/Nav.vue'
  import HeaderIcons from '../HeaderIcons/HeaderIcons.vue'
  import HeaderDrops from '../HeaderDrops/HeaderDrops.vue'

  export default {
    components: {
      Nav,
      HeaderIcons,
      HeaderDrops
    }
  }
</script>  