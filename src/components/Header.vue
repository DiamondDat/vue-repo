<template>
  <div class="row header">
    <div class="col-md-8 col-md-offset-2">
      <ul class="nav nav-tabs nav-justified">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/repos/new" tag="li" active-class="active"><a>New Repo</a></router-link>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .header {
    margin-bottom: 64px;
  }
</style>
