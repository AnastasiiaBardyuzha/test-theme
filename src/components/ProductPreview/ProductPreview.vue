<template>
  <div class="product__preview">
    <div class="product__real-photo">
      <img :src="'/img/real/' + img + '.png'" alt="Photo product" class="product__real-img">
    </div>
    <div class="product__demos" @click="getImg">
    <div>
    <img
      v-for="image in images"
      :key="image.key"
      :src="image.url"
      :alt="image.alt"
      :data-img="image.key"
      class="product__demo"
      :class="{'product__demo_active': image.isActive}"
    >
    </div>
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
        <span class="product__social-text">
          Share
        </span>
        <Socials />
      </div>
    </div>
  </div>
</template>

<script>
import Socials from '../Socials/Socials';


export default {
  data () {
    return {
      images: [
        { url: '/img/demo/img0.png', alt: 'Owl', key: 'img0', isActive: true },
        { url: '/img/demo/img1.png', alt: 'Cosmonaut', key: 'img1', isActive: false },
        { url: '/img/demo/img2.png', alt: 'Stairs with man', key: 'img2', isActive: false },
        { url: '/img/demo/img3.png', alt: 'Pampkin', key: 'img3', isActive: false },
        { url: '/img/demo/img4.png', alt: 'Stairs', key: 'img4', isActive: false },
        ],
      img: "img0",
      socials: [
        { src: '/img/social/facebook.png', alt: 'Facebook icon', url: 'https://www.facebook.com' },
        { src: '/img/social/google.png', alt: 'Google+ icon', url: 'https://plus.google.com' },
        { src: '/img/social/twitter.png', alt: 'Twitter icon', url: 'https://twitter.com' },
        { src: '/img/social/pinter.png', alt: 'Pinterest icon', url: 'https://www.pinterest.ru' }
      ]
    }
  },
  methods: {
    getImg({ target }) {
     const currentImg = target.getAttribute('data-img');

      if(currentImg) {
        const nextActive = this.images.findIndex(img => img.key === currentImg);
        const prewActive = this.images.findIndex(img => img.isActive === true);
        if (nextActive !== prewActive) {
          this.images[nextActive].isActive = true;
          this.images[prewActive].isActive = false;
        }

        this.img = currentImg;
      }  
    }
  },
  components: {
    Socials
  }
}
</script>
