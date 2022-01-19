import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// ROUTES
import Home from './views/Home.vue'
import Catalog from './views/Catalog.vue'


// ROUTER CONFIG
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: Home, 
      name: 'Home' ,
      meta: { requiredService: true} 
    },
    { 
      path: '/catalog', 
      component: Catalog, 
      name: 'Catalog' ,
      meta: { requiredService: true} 
    },
  ],
})

router.beforeEach(function (to, from, next) { 
  setTimeout(() => {
      window.scrollTo(0, 0);
  }, 400);
  next();
})




// TAILWIND CSS
import './index.css'

// APP
const app = createApp(App)
app.use(router)
app.mount('#app')
