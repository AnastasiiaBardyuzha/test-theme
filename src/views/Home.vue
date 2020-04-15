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
      <div class="product__preview">
        <img src="../assets/product/real/img0.png" alt="Photo product" class="product__real-img">
        <div class="product__demos">
          <img 
            v-for="image in images" 
            :key="image.key" 
            :src="image.url" 
            :alt="image.alt" 
            :data-img="image.key"
            class="product__demo"
          >
        </div>
        <div class="product__preview-info">
          <h3 class="product__preview-title">$299.99</h3>
          <div class="product__select-color select">
            <div class="select__color"></div>
            <div class="select__text">
              Dark Gray
            </div>
          </div>
          <div class="product__button-wrapper">
            <div class="product__counter counter">
              <div class="counter__button">
                -
              </div>
              <div class="couneter__text">
                2
              </div>
              <div class="counter__button">
                +
              </div>
            </div>
            <button type="button" name="add button" class="product__button">
              Add to cart
            </button>
          </div>
          <div class="product__content">
            <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven- tore Beatae vitae dicta sunt explicabo.
            </span>
            <br/>
            <span>  
              Nemo enim ipsam voluptatem quia voluptas
            </span>
            <router-link to="#" class="product__content-link">Read more</router-link>
          </div>
          <div class="product__socials">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      images: [
        { url: '/img/demo/img0.png', alt: 'Owl', key: 'img0' },
        { url: '/img/demo/img1.png', alt: 'Cosmonaut', key: 'img1' },
        { url: '/img/demo/img2.png', alt: 'Stairs with man', key: 'img2' },
        { url: '/img/demo/img3.png', alt: 'Pampkin', key: 'img3' },
        { url: '/img/demo/img4.png', alt: 'Stairs', key: 'img4' },
        ]
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

  .product {
    background-color: #fff;
    border-radius: 5px;
    display: flex;

    &__preview {
      display: flex;
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
      background: $button-after-color;
      justify-content: center;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 900;
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
