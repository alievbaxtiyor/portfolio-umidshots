import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faHome,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)
library.add(faUser, faHome, faArrowRight, faArrowLeft)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(i18n)
app.mount('#app')
