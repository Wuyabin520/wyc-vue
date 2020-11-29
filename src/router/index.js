import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../components/Login"
const routes = [
 {
   path:"/login",
   component:Login
 },
 {
    path:'/',
    redirect:"/login",
 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
