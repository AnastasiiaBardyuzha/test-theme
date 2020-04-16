<template>
  <div class="description">
    <div class="description__part-text">
      <p>
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      </p>
    </div>
    <div class="description__part-text">
      <p class="mb-0">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      </p>
      <span>
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
      </span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .description {
    display: flex;
    justify-content: space-between;
    max-width: 990px;
    font-weight: 300;
    color: #555555;

    &__part-text {
      max-width: 455px;
    }
  }

  .mb-0 {
    margin-bottom: 1px;
  }


</style>