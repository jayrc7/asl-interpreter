import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// add a guard to prevent users from seeing protected pages
// only make the login page accessible for not logged in users (for now)
// router.beforeEach((to, from ) => {
//     // first check if the user is logged in somehow

//     // let the user go to the login page only if they're not signed in already 
//     // if they're signed in, just send them back home!
//     if (from.name !== 'login' && to.name == 'login') 
//         return true; 
//     else 
//         return { name: 'login' };
// })

app.mount('#app')
