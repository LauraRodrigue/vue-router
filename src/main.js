import { createApp } from 'vue';
//import './style.css'
import { Quasar } from 'quasar'
import{router} from "./routers/routes.js"
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue';

const app = createApp(App);

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })

app.use(router);

app.mount('#app');
