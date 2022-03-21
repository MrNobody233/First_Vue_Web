import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'
import Robot from '@/views/Robot.vue'
import Contact from "@/views/Contact.vue";
Vue.use(VueRouter)



const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/user', component: User },
  { path: '/robot', component: Robot },
  { path: '/contact', component: Contact },

]

const router = new VueRouter({
  routes
})

export default router
