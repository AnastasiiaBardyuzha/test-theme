<template>
  <div class="carousel">
    <h1 class="carousel__title">Popular items</h1>
    <ul class="carousel__wrapper">
      <li
        v-for='card in carouselImages'
        :key="card.src"
        class="carousel__item"
      >
        <div class="carousel__card">
          <div class="carousel__photo">
            <img :src="card.src" :alt="card.alt" class="carousel__img">
          </div>
          <div class="carousel__info">
            <span class="carousel__text">{{ card.title }}</span>
            <br/>
            <span class="carousel__text">{{ card.underTitle }}</span>
          </div>
          <div class="carousel__price">
            $ {{ card.price }}
          </div>
        </div>
      </li>
    </ul>
    <div class="carousel__btn carousel__btn_prew"></div>
    <div class="carousel__btn carousel__btn_next"></div>
  </div>
</template>

<script>
export default {
    data () {
     return {
       carouselImages: [ 
         { src: '/img/carousel/stairs.png', alt: 'Stairs', title: 'Kristina Dam Oak Table With', underTitle: 'White Marble Top', price: '799.55' },
         { src: '/img/carousel/cat.png', alt: 'Cat', title: 'Kristina Dam Oak Table With', underTitle: 'White Marble Top', price: '2195.00' },
         { src: '/img/carousel/liquors.png', alt: 'Liquors', title: 'Activate Facial Mask and', underTitle: 'Charcoal Soap', price: '129.55' },
         { src: '/img/carousel/elefants.png', alt: 'Elefants', title: 'Cocktail Table Walnut', underTitle: '| YES', price: '799,55' },
        ],
       arrow: "1",
     }
   }   
}
</script>>

<style lang="scss">
  @import "../../utils/_mixins.scss";
  @import "../../utils/_vars.scss";

  .carousel {
    text-align: center;
    position: relative;

    &__title {
      @include head;
      @include main-color-head;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    &__wrapper {
      @include list;
      overflow: hidden;
    }

    &__item {
      display: block;
      margin-left: 0;
      margin-right: 30px;
      transition: margin-left 300ms linear;
    }

    &__card {
      width: 270px;
      background: #fff;
      border-radius: 5px;
      text-align: center;
      font-weight: 600; 
      padding-bottom: 19px;
    }

    &__photo {
      width: 270px;
      height: 260px;
      margin-bottom: 16px;
    }

    &__img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
      object-fit: cover;
    }

    &__info {
      margin-bottom: 16px;
    }

    &__text {
      color: $carousel-info-color;
      line-height: 18px;
    }

    &__price {
      font-size: 14px;
      font-family: $font-family-head-product;
      color: $price-carousel-color;
    }

    &__btn {
      display: block;
      position: absolute;
      top: 0;
      height: 35px;
      width: 35px;
      border-right: 1px solid #45413e;
      border-top: 1px solid #45413e;
    }

    &__btn_prew {
      left: 0;
      transform: skew(-90deg);
    }

    &__btn_next {
      right: 0;
      transform: skew(90deg);
    }
  }

</style>>