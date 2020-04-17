<template>
  <div class="social">
      <a
        v-for="social in socials"
        :key="social.src"
        :href="social.url"
        target="blank"
        class="social__link">
        <img :src="social.src" :alt="social.alt" class="social__img">
      </a>
    </div>
</template>

<script>
export default {
  data () {
    return {
      socials: [
        { src: '/img/social/facebook.png', alt: 'Facebook icon', url: 'https://www.facebook.com' },
        { src: '/img/social/google.png', alt: 'Google+ icon', url: 'https://plus.google.com' },
        { src: '/img/social/twitter.png', alt: 'Twitter icon', url: 'https://twitter.com' },
        { src: '/img/social/pinter.png', alt: 'Pinterest icon', url: 'https://www.pinterest.ru' }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../utils/_mixins.scss";
  @import "../../utils/_vars.scss";

  .social {
    @include flex-between-center;
      width: 120px;

    &__icons {
      @include flex-between-center;
      width: 120px;
    }

    &__link {
      display: block;
      height: 15px;
      opacity: 0.4;
      transition: opacity 200ms linear;

      &:hover {
        opacity: 0.8;
      }
    }

    &__img {
      height: 15px;
    }
  }



</style>
