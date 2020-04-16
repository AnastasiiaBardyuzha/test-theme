<template>
  <div>
    <h1>This page for {{ id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params['id'],
    }
  },
  watch: {
    $route (toR) {
      this.id = toR.params['id']
    }
  }
}
</script>