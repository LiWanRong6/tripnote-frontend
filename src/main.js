import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './plugins/pinia'

/* FONTAWESOME */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars, faImage, faGlobe, faPhone, faHeart, faShareNodes, faEarthAmericas, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

/* VUE QUILL */
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'



import '@/style/style.scss'

library.add(faMagnifyingGlass, faBars, faImage, faGlobe, faPhone, faHeart, faShareNodes, faEarthAmericas, faCirclePlus)



createApp(App)
  .use(pinia)
  .use(router)
  .component('QuillEditor', QuillEditor)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
