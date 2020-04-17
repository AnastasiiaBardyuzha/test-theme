<template>
    <div class="pre-footer">
        <div class="features">
          <div
            v-for="feature in features"
            :key="feature.src"
            class="features__item"
          >
            <img :src="feature.src" :alt="feature.alt" class="features__img">
            <div class="features__info">
              <h6 class="features__title"> {{ feature.title }} </h6>
              <p class="features__text"> {{ feature.text }} </p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          src: '/img/pre_footer/delivery.png',
          alt: 'Delivery',
          title: 'Free Delivery',
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
        },
        {
          src: '/img/pre_footer/returns.png',
          alt: 'Returns',
          title: 'Easy Returns',
          text: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae'
        },
        {
          src: '/img/pre_footer/choice.png',
          alt: 'Note',
          title: 'Wide Choice',
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
        }
      ]
    }
  }
    
}
</script>

<style lang="scss">
  @import "../../utils/_mixins.scss";
  @import "../../utils/_vars.scss";
  
  .pre-footer {
    background: $pre-footer-back;
    padding: 45px 55px;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 340px);
    column-gap: 63px;
    margin: 5px 0 3px;

    &__item {
      max-width: 340px;
      display: flex;
      align-items: flex-start;
    }

    &__img {
      display: block;
      margin-top: 8px;
      margin-right: 43px;
    }

    &__info {
      max-width: 231px;
    }

    &__title {
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
      color: #fff;
      margin: 0;
      margin-bottom: 3px;
    }

    &__text {
      font-size: 14px;
      font-weight: 300;
      line-height: 18px;
      color: $pre-footer-text-color;
    }
  }
</style>