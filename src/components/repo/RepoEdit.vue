<template>
  <div class="container">
    <div class="text-center create-header">
      <h1>Edit Repo {{ name }}</h1>
    </div>
    <div class="row">
      <div class="col-md-8 col-md-offset-2 back-link">
        <router-link
          tag="h4"
          to="/"><a>Back to Home</a></router-link>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="form-group col-md-8 col-md-offset-2">
          <label for="name">Name</label>
          <input
                  type="text"
                  id="name"
                  class="form-control"
                  v-model="name">
        </div>
        <div class="form-group col-md-8 col-md-offset-2">
          <label for="password">Description</label>
          <input
                  type="description"
                  id="description"
                  class="form-control"
                  v-model="description">
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <button
              class="btn btn-primary"
              @click.prevent="submitted">Submit!
            </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row"  v-if="errors.length > 0">
      <div class="col-md-8 col-md-offset-2">
        <ul class="list-group">
          <li v-for="err in errors" class="list-group-item list-group-item-danger">{{ err.message }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        name: this.$route.params.name,
        description: '',
        errors: []
      }
    },
    methods: {
      submitted() {
        if (this.name.length > 0 && this.description.length > 0) {
          const repoName = this.$route.params.name
          const newName = this.name;
          const newDescription = this.description;
          this.$emit('edit-repo', {
            name,
            description,
          });

          axios({
            method: 'patch',
            url: 'https://api.github.com/repos/DiamondDat/' + repoName,
            headers: {
                  'Authorization': 'token dc406c0240ba602daf1b86a6c38b2c4f81bde44c',
                  'Content-Type': 'application/json'
                },
            data: {
              name: newName,
              description: newDescription
            }
          })
          .then ( alert('Repo successfully updated!' ) )
          .catch(e => {
            this.errors.push(e)
          });
          this.name = '';
          this.description = '';
        }
      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.confirmed || (this.name.length <= 0 && this.description.length <= 0)) {
        next();
      } else {
        if (confirm('Are you sure?')) {
            next();
        } else {
            next(false);
        }
      }
    }
  }
</script>

<style scoped>
  .edit-header {
    margin: 64px 0;
  }
  .back-link {
    margin-bottom: 16px;
  }
</style>

