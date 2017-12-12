<template>
  <div class="row">
    <h3 class="text-center">Total Repos: {{ repos.length }}</h3>
    <div class="col-md-8 col-md-offset-2">
      <ul class="list-group">
        <app-repo-detail
          @delete-repo="deleteRepo"
          v-for="repo in repos"
          :repo = "repo"
          :key="repo.id"></app-repo-detail>
      </ul>
      <hr>
    </div>
  </div>
</template>

<script>
  import RepoDetail from './RepoDetail.vue';
  import axios from 'axios';

  export default {
    props: ['repos'],
    components: {
      AppRepoDetail: RepoDetail
    },
    methods: {
      deleteRepo(repo) {
        if (confirm('Are you sure?')) {
          const repoIndex = this.repos.indexOf(repo);
          axios({
            method: 'delete',
            url: 'https://api.github.com/repos/DiamondDat/' + repo.name,
            headers: {
                  'Authorization': 'token dc406c0240ba602daf1b86a6c38b2c4f81bde44c',
                  'Content-Type': 'application/json'
                }
          })
          .then( this.repos.splice(repoIndex, 1) )
          .catch(e => {
            console.log(e);
          });
        }
      }
    }
  }
</script>
