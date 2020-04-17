<template>
  <div class="product__tabs">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.name"
        :data-index="index"
        @click="getIndex"
        class="tabs__button"
        :class="{'tabs__button-active': tab.isActive}"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="tabs__content">
      <div v-if="tabIndex === '0'">
        <Description />
      </div>
      <div v-if="tabIndex === '1'">
        <Additional />
      </div>
      <div v-if="tabIndex === '2'">
        <Reviews />
      </div>
    </div>
  </div>
</template>

<script>
import Description from '../Description'
import Additional from '../Additional'
import Reviews from '../Reviews'

export default {
   data () {
     return {
       tabs: [
         {name: 'Description', isActive: true },
         {name: 'Additional Information', isActive: false },
         {name: 'Reviews (3)', isActive: false }
        ],
       tabIndex: "0",
     }
   },
  methods: {
    getIndex () {
      const currentIndex = event.target.getAttribute('data-index');

      this.tabs = this.tabs.map((tab, index) => {
        if(index === Number(currentIndex)) {
            return { ...tab, isActive: true };
        } else {
          return { ...tab, isActive: false }
        }
      })

      this.tabIndex = currentIndex;
      console.log(this.tabIndex);
    }
  },
  components: {
    Description,
    Additional,
    Reviews
  }
}
</script>

<style lang="scss">
  @import "../../utils/_mixins.scss";
  @import "../../utils/_vars.scss";

  .product__tabs {
    margin-bottom: 33px;
  }

  .tabs {
  max-width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #e8e2d6;

  &__button {
    position: relative;
    bottom: -2px;
    font-size: 27px;
    font-family: $font-family-head;
    font-weight: 600;
    background: transparent;
    color: $non-active-tab-color;
    border: 2px solid transparent;
    border-radius: 23px 23px 0 0;
    padding: 17px 44px;
    text-align: center;
    cursor: pointer;
    z-index: 2;
    margin: 0;
  }

  &__button-active {
    border: 2px solid $border-color-preview-button;
    color: #000;
    border-bottom: 2px solid #fff;
  }

  &__line {
    position: relative;
    width: 100%;
    height: 2px;
    background: #e8e2d6;
    top: -2px;
  }

  &__content {
    padding: 50px 70px;
    min-height: 255px;
  }
}

</style>
