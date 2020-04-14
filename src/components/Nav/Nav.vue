<template>
  <nav class="nav">
    <ul class="nav__list">  
      <router-link tag="li" to="/" exact class="nav__item">
        <a class="nav__link  nav__link_drop">
          Categiries
        </a>
      </router-link>
      <router-link tag="li" to="/about" class="nav__item">
        <a class="nav__link">About</a>
      </router-link>
      <router-link tag="li" to="/contact" class="nav__item">
        <a class="nav__link">Contact</a>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {

}
</script>

<style lang="scss">
  @import "../../utils/_mixins.scss";

  .nav {
    display: flex;

    &__list {
      @include list;
    }

    &__item {
      display: inline-block;

    }

    &__link {
      @include reset-link;
      @include nav_link;
      padding: 29px 0 28px;
      position: relative;
      width: 145px;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        z-index: $z-index-before;
        background-color: #262a32;
        transition: all 200ms linear;
      }

      &:hover:before {
      width: 100%;
      height: 100%;
    }

      &:focus:before {
        width: 100%;
        height: 100%;
      }

      &:hover {
        color: #fff;
      }

      &:focus {
        color: #fff;
      }
    }

    &__link_drop {
      &:after {
        @include drop;
      }

      &:hover:after {
        width: 0;
        height: 0;
      }
    }
  }
  
</style>