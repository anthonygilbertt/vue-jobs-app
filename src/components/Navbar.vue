<template>
  <h3>Project Planner<span class="material-icons icon">
list
</span></h3>
    <router-link to="/">Home</router-link> |
  <router-link :to="{ name: 'AddProject'}">Add Project</router-link> |
  <router-link :to="{ name: 'EditProject'}">Edit Project</router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon {
  text-size-adjust: 50px;
  color: coral;
  min-height: 50px;
}

</style>