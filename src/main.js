import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components'
import sassStyles from '@/assets/layout/index.scss'
import store from './vuex/store'
import Paginate from 'vuejs-paginate-next'

const app = createApp(App);


components.forEach(component => {
    app.component(component.name, component)
});

app.component('Paginate', Paginate)

app
    .use(router)
    .use(store)
    .mount('#app')
