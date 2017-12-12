<template>
  <li class="list-group-item">
    <div class="panel panel-info">
      <div class="panel-heading">{{ repo.id }}</div>
      <div class="panel-body">
        <h3>{{ repo.name }}</h3>
        <h4>{{ repo.full_name }}</h4>
        <p>{{ repo.description }}</p>
        <div class="pull-right">
          <router-link
            tag="span"
            :to="'/repos/' + repo.name + '/edit'"
            class="glyphicon glyphicon-edit text-black"
            style="cursor: pointer"
            @click="editRepo(repo)"></span>
          </router-link>
          <span class="glyphicon glyphicon-trash" style="cursor: pointer" @click="deleteRepo(repo)"></span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['repo'],
    methods: {
      editRepo(repo) {
        this.$emit('edit-repo', repo);
      },
      deleteRepo(repo) {
        this.$emit('delete-repo', repo);
        console.log(repo);
      }
    }
  }
</script>

<style>
  .text-black {
    color: black;
  }
</style>
