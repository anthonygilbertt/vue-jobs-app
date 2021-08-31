<template>
  <h1>Job Details</h1>
  <p>The job is is {{ slug }}</p>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>

<style>

</style>