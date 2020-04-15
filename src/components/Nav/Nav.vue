<template>
<div class="">
  <nav class="nav">
    <ul class="nav__list">  
      <router-link tag="li" to="/categories" exact class="nav__item nav__item_with-drop">
        <a class="nav__link  nav__link_drop">
          Categiries
        </a>
        <ul class="nav__drop-list drop">
          <li class="drop__title">Product categories</li>
          <router-link tag="li" :to="'/' + category.name" exact
            v-for="category in categories" :key="category.name">
            <a class="drop__link">
              {{ category.name }}
            </a>
            </router-link>
        </ul>
      </router-link>
      <router-link tag="li" to="/about" class="nav__item">
        <a class="nav__link">About</a>
      </router-link>
      <router-link tag="li" to="/contact" class="nav__item">
        <a class="nav__link">Contact</a>
      </router-link>
    </ul>
  </nav>
  </div>
</template>

<script>
  export default {
  props: {
      categories: Array
      },
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
      position: relative;


      &:before {
        @include before-nav-back;
      }

      &:hover:before,
      &:focus:before,
      &:active:before {
      width: 100%;
      height: 100%;
    }

      &:hover .nav__link,
      &:focus .nav__link {
        color: #fff;
      }

      &:hover .nav__link_drop:after {
        width: 0;
        height: 0;
      }
    }

    &__link {
      @include reset-link;
      @include nav_link;
      text-transform: uppercase;
      padding: 29px 0 28px;
      position: relative;
      width: 145px;

       &:before {
        @include before-nav-back;
      }

      &:hover:before,
      &:focus:before,
      &:active:before {
      width: 100%;
      height: 100%;
    }

      &:focus {
        color: #fff;
      }
    }

    &__link_drop {
      &:after {
        @include drop;
      }
    }
  }

  .drop {
    position: absolute;
    display: none;
    list-style: none;
    opacity: 0;
    width: 270px;
    background-color: #262a32;
    color: #fff;
    font-weight: 400;
    line-height: 31px;
    padding: 48px 27px;
    border-radius: 0 5px 5px;
    bottom: -199px;
    left: 0;
    transition: opacity 200ms linear;

    &__title {
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 11px;
    }

    &__link {
      @include reset-link;
      @include nav_link;
      color: #fff;
      font-weight: 400;
      line-height: 31px;
    }
  }

  .nav__item_with-drop:hover .drop {
    display: block;
    opacity: 1;
  }
  
</style>