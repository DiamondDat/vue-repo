import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Repo from '@/components/repo/Repo.vue'
import RepoList from '@/components/repo/RepoList.vue'
import RepoCreate from '@/components/repo/RepoCreate.vue'
import RepoEdit from '@/components/repo/RepoEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Repo },
    { path: '/repos/new', component: RepoCreate },
    { path: '/repos/:name/edit', component: RepoEdit },
    { path: '*', redirect: '/' }
  ]
})
