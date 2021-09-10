<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
  <FilterNav />
  <SingleProduct />

</template>

<script>
import FilterNav from '../components/FilterNav.vue'
import SingleProduct from '../components/SingleProduct.vue'

export default {

  name: 'Home',
  components: {
    FilterNav,
    SingleProduct
 
  }
}
</script>
