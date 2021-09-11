<template>
  <div class="project" :class="{ complete: project.complete}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons tick">done</span>
      </div>
    </div>

    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id
    };
  },
  toggleDetails(showDetails) {
    if ((showDetails = false)) this.showDetails = !showDetails;
  },
  methods: {
    deleteProject(project) {
      console.log('delete button clicked');
      
      fetch(this.uri, { method: 'DELETE'})
        .then((e) = this.$emit('delete', this.project.id))
        .catch(err => console.log(err.message))
    },
    toggleComplete(project) {
      console.log('Complete button clicked');

      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ complete: this.project.complete = !this.project.complete })
        })
        .then((e) => {
          this.$emit('toggleComplete', this.project.id)
        })
        .catch(err => console.log(err.mesage))
    }

  }
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3pc rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
.project.complete {
  border-left: 4px solid #2d9236;
}
.project.complete .tick{
  color:  #2d9236;
}
</style>