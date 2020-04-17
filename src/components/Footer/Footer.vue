<template>
    <div class="footer">
      <div class="footer__copirigth">
        <span>
          © 2016
        </span>
        <router-link to="/" exact class="footer__link">
          Test Theme
        </router-link>
        <br/>
        <span>
          Made with love
        </span>
      </div>
      <div class="footer__categories">
        <h6 class="footer__title">
          Categories
        </h6>
        <ul class="footer__list">
          <li
            v-for="(category, index) in categories"
            :key="index"
          > 
            <a href="#" class="footer__item">
              {{category}}
            </a> 
          </li>
        </ul>
      </div>
      <div class="footer__about">
        <h6 class="footer__title">
          About
        </h6>
        <ul class="footer__list">
          <li
            v-for="(item, index) in about"
            :key="index"
          > 
            <a href="#" class="footer__item">
              {{item}}
            </a> 
          </li>
        </ul>
      </div>
      <div class="footer__socials">  
        <Socials />
      </div>
    </div>
</template>

<script>
import Socials from '../Socials/Socials';

export default {
  data () {
    return {
      categories: ['Accessories', 'Alcohol', 'Art', 'Books', 'Drink', 'Electronics',
        'Flowers & Plants', 'Food', 'Gadgets', 'Garden', 'Grocery', 'Home', 'Jewelry',
        'Kids & Baby', 'Men\'s Fashion', 'Mobile', 'Motorcycles', 'Movies', 'Music','Office',
        'Pets','Romantic', 'Sport', 'Toys', 'Travel', 'Women\'s Fashion'],
      about: ['About us', 'Delivery', 'Testimonials', 'Contact']
    }
  },
  components: {
    Socials
  }
    
}
</script>

<style lang="scss">
  @import "../../utils/_mixins.scss";
  @import "../../utils/_vars.scss";

  .footer {
    background-color: #fff;
    padding: 42px 55px;
    display: flex;
    font-size: 13px;

    &__copirigth {
      width: 23%;
    }

    &__link {
      @include reset-link;
      color: $button-after-color;
    }

    &__categories {
      width: 51%;
    }

    &__title {
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 600;
      color: $footer-title-color;
      margin-bottom: 18px;
    }

    &__list {
      @include list;
      align-items: start;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      max-height: 343px;
    }

    &__item {
      line-height: 31px;
      opacity: 0.7;
      transition: opacity 200ma linear;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    &__about {
      width: 15%;
    }

    &__socials {
      width: 10,5%;
    }
  }
  .footer__socials .socials {
    width: 11%;
    align-items: start;
  }
</style>