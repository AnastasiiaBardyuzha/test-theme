<template>
  <ul class="icons">  
    <li class="icons__item">
      <div class="icons__img">
        <img src="../../assets/icons/search.png" alt="Search">
      </div> 
    </li>
    <li class="icons__item">
      <div class="icons__img">
        <img src="../../assets/icons/profile.png" alt="Search">
      </div>
    </li>
    <li class="icons__item">
      <div class="icons__img icons__img_after icons__img_after_1">
        <img src="../../assets/icons/heart.png" alt="Search">
      </div>
    </li>
    <li class="icons__item">
      <div class="icons__img icons__img_after icons__img_after_2">
        <img src="../../assets/icons/bag.png" alt="Search">
      </div>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "../../utils/_mixins.scss";

  .icons {
    @include list;
    justify-content: space-between;

    &__item {
      height: 24px;
    }

    &__img {
      position: relative;
      height: 24px;
    }

    &__img_after {
      &:after {
        @include icon-after;
      }
    }

    &__img_after_1 {
      &:after {
        content: "1";
      }
    }

    &__img_after_2 {
      &:after {
        content: "2";
      }
    }
  }

</style>