<template>
  <ul class="drops">
    <li class="drops__item">
        <a href="#" class="drops__link">
          en
        </a>
    </li>
    <li class="drops__item">
        <a href="#" class="drops__link">
          $ us
        </a>
    </li>  
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import "../../utils/_mixins.scss";

  .drops {
    @include list;
    justify-content: space-between;

    &__item {
      display: inline-block;
    }

    &__link {
      @include reset-link;
      @include nav_link;
      padding: 29px 18px 28px 0;
      position: relative;
      color: #a2a09e;
      font-size: 14px;

      &:after {
          @include drop;
      }
    }
  }

</style>