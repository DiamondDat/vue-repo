<template>
  <div  class="container">
    <app-header></app-header>
    <app-repo-list :repos="repos"></app-repo-list>

    <div class="errors"  v-if="errors.length > 0">
      <ul class="list-group">
        <li v-for="err in errors" class="list-group-item list-group-item-danger">{{ err.message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import RepoList from './RepoList';
  import Header from '@/components/Header.vue'

  export default {
    data() {
      return {
        repos: [],
        errors: []
      }
    },
    components: {
      AppRepoList: RepoList,
      AppHeader: Header
    },
    created() {
      axios.get('https://api.github.com/users/DiamondDat/repos')
      .then(res => {
        this.repos = res.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>
