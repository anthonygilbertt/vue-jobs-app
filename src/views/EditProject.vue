<template>
  <h1>Edit Project</h1>

  <form @submit.prevent="updateDB">
    <label>Title</label>
    <input type="text" v-model="title" required>
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>


</template>

<script>
// CHALLENGE:
//-------------
    // - Add a submit handler to update the project
    // - Make a fetch (PATCH) request to the uri to update the project
    // - Redirect the user to the home page when done
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/' + this.id
    }
  },
  mounted(title, details) {
    fetch(this.uri)
      .then((res) => res.json())
      .then(data => {
        console.log(data);

        this.title = data.title
        this.details = data.details
      })
  },
  methods: {
    updateDB() {

     fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: this.title, details: this.details })
      })
      .then(() => {
        this.$router.push('/')
      })
      .catch(err => console.log(err))
    }
  }
  
}
</script>

<style>

</style>