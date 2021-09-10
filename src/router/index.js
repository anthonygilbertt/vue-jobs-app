import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from '../views/projects/AddProject.vue'
import EditProject from '../views/projects/EditProject.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject
  },
  {
    // path: '/projects/:id',
    path: '/projects',
    name: 'EditProject',
    component: EditProject,
    props: true //this means that we can accept 
    //any route parameter as props
  },
  // //redirect
  // {
  //   path: '/all-jobs',
  //   redirect: '/jobs'
  // },
  // Cath All - 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
