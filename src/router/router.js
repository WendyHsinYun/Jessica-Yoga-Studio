
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue' // 引入 Home 名字
import About from '@/views/About.vue' 
import Calendar from '@/views/Calendar.vue' 
import Contact from '@/views/Contact.vue' 
import Yoga from '@/views/classes/Yoga.vue' 
import KXPilates from '@/views/classes/KXPilates.vue' 
import AerialYoga from '@/views/classes/AerialYoga.vue' 


const routes = [ // 將 routes 獨立出來有自己的變數，再使用 createRouter 操作，讓他更好被更改。
    {path:'/', name: 'Home', component: Home}, // 以 root URL 作為路徑，Home 作為名稱，然後告訴 router 當到達"Home" 這個路徑時要渲染 "Home" 組件
    {path:'/About', name: 'About', component: About}, 
    {path:'/Contact', name: 'Contact', component: Contact},
    {path:'/Calendar', name: 'Calendar', component: Calendar},
    {path:'/classes/yoga', name: 'Yoga', component: Yoga},
    {path:'/classes/KXPilates', name: 'KXPilates', component: KXPilates},
    {path:'/classes/AerialYoga', name: 'AerialYoga', component: AerialYoga}
] 


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return {left : 0 , top : 0};
    }
  });

export default router 
