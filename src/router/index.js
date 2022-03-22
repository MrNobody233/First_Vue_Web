import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'
import Robot from '@/views/Robot.vue'
import Contact from "@/views/Contact.vue";
import Active_01 from "@/views/Active/Active_01.vue";
import Active_02 from "@/views/Active/Active_02.vue";
import Active_03 from "@/views/Active/Active_03.vue";

Vue.use(VueRouter)


const routes = [
    {path: '/', component: Home},
    {path: '/About', component: About},
    {path: '/user', component: User},
    {path: '/robot', component: Robot},
    {path: '/contact', component: Contact},
    {path: '/active1', component: Active_01},
    {path: '/active2', component: Active_02},
    {path: '/active3', component: Active_03},
]

const router = new VueRouter({
    routes
})

export default router
