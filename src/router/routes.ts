import { RouteConfig } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Login = () =>
  import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
const Logout = () =>
  import(/* webpackChunkName: "logout" */ '../views/auth/Logout.vue')
const Register = () =>
  import(/* webpackChunkName: "register" */ '../views/auth/Register.vue')
const DashboardIndex = () =>
  import(/* webpackChunkName: "dashboard" */ '../views/dashboard/Index.vue')
const Profile = () =>
  import(/* webpackChunkName: "profile" */ '../views/dashboard/Profile.vue')

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'dashboard',
    component: DashboardIndex,
    children: [
      {
        path: '',
        name: 'profile',
        component: Profile
      }
    ]
  }
]

export default routes
