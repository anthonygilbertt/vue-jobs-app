<template>

  <Navbar />
<!--
  <router-link to="/">Home</router-link> |
  <router-link :to="{ name: 'AddProject'}">Add Project</router-link> |
  <router-link :to="{ name: 'EditProject'}">Edit Project</router-link>


  <button @click="redirect">Redurect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>
-->
  <router-view/>


</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(+1)
    }
  }
}
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
  
}


</style>
