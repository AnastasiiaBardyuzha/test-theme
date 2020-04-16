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
    <div class="product">
     <ProductPreview />
     <ProductTabs />
    </div>
    <Carousel />
  </div>
</template>

<script>
import ProductPreview from '../components/ProductPreview/ProductPreview';
import ProductTabs from '../components/ProductTabs/ProductTabs';
import Carousel from '../components/Carousel/Carousel';

export default {
  components: {
    ProductPreview,
    ProductTabs,
    Carousel
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

  .product {
    background-color: #fff;
    border-radius: 5px;

    &__preview {
      display: flex;
      margin-bottom: 48px;
    }

    &__real-img {
      border-radius: 5px 0 0;
      display: block;
      margin-right: 30px;
    }

    &__demos {
      display: flex;
      flex-direction: column;
      width: 73px;
      padding: 27px 0;
      margin-right: 72px;
    }

    &__demo {
      margin-bottom: 25px;
    }

    &__preview-info {
      padding: 35px 0;
    }

    &__preview-title {
      @include head;
      @include main-color-head;
      @include big-head;
      font-family: $font-family-head-product;
      margin-bottom: 40px;
      padding-left: 10px;
    }

    &__select-color {
      display: flex;
      align-items: center;
      @include preview-buttons (150px, 40px);
      border: 2px solid $border-color-preview-button;
      font-size: 14px;
      padding: 0 8px;
      margin-bottom: 20px;
    }

    &__button-wrapper {
      display: flex;
      margin-bottom: 50px;
    }

    &__counter {
      @include preview-buttons (112px, 40px);
      justify-content: space-between;
      border: 2px solid $border-color-preview-button;
      font-size: 14px;
      padding: 0 20px;
      margin-right: 20px;
    }

    &__button {
      @include preview-buttons (158px, 40px);
      color: #fff;
      border: none;
      background: $button-after-color;
      justify-content: center;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 900;
      transition: background-color 200ms linear;

      &:hover {
        background-color: #61539b;
      }
    }

    &__content {
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      width: 350px;
    }

    &__content-link {
      @include reset-link;
      display: block;
      color: $pass-visited-link;
      font-weight: 600;
      margin: 20px 0 38px;
    }

    &__socials {
      @include flex-between-center;
      max-width: 190px;
      font-size: 14px;
    }

    &__social-text {
      opacity: 0.4;
    }

    &__social-icons {
      @include flex-between-center;
      width: 120px;
    }

    &__social-link {
      display: block;
      height: 15px;
      opacity: 0.4;
      transition: opacity 200ms linear;

      &:hover {
        opacity: 0.8;
      }
    }

    &__social-img {
      height: 15px;
    }
  }

  .select {
    &__color {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: $select-colo-grey;
      margin-right: 12px;
    }

    &__text {
      width: 90px;
      display: block;
      position: relative;
      text-align: left;

      &:after {
        content: '';
        position: absolute;
        display: block;
        right: 0;
        top: 5px;
        width: 9px;
        height: 8px;
        background-image: url("../assets/product/drop.png");
        background-position: bottom;
        background-repeat: no-repeat;
      }
    }
  }

  .counter {
    &__button {
      color: $counter-color;
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>
