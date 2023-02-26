import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZWJ1cmdvbiIsImEiOiJjbGVrZXRtNmkwanc4M3RuenZxdGYxMGZ1In0.t8PEhIIqDr2xilI5xu7P8g'

if (! navigator.geolocation) {
    alert('Your browser does not support geolocation')
    throw new Error('Your browser does not support geolocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
