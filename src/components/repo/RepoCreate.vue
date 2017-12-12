<template>
  <div class="container">
    <app-header></app-header>
    <div class="text-center create-header">
      <h1>Create New Repo</h1>
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
  import Header from '@/components/Header.vue';

  export default {
    data() {
      return {
        name: '',
        description: '',
        errors: []
      }
    },
    components: {
      AppHeader: Header
    },
    methods: {
      submitted() {
        if (this.name.length > 0 && this.description.length > 0) {
          const name = this.name;
          const description = this.description;
          this.$emit('create-repo', {
            name,
            description,
          });

          axios({
            method: 'post',
            url: 'https://api.github.com/user/repos',
            headers: {
                  'Authorization': 'token dc406c0240ba602daf1b86a6c38b2c4f81bde44c',
                  'Content-Type': 'application/json'
                },
            data: {
              name: name,
              description: description
            }
          })
          .then ( alert('Repo successfully created!') )
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
  .create-header {
    margin: 64px 0;
  }
</style>
