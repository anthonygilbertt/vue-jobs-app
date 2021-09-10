<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProduct :project="project"/>
        
      </div>
    </div>
    <div v-else>
      <p>There are no items in this array</p>
    </div>
  </div>
  <FilterNav />

</template>

<script>
import FilterNav from '../components/FilterNav.vue'
import SingleProduct from '../components/SingleProduct.vue'

export default {

  components: {
    FilterNav,
    SingleProduct
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err))
  }
}
</script>
