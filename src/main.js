import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import TheHeader from "@/components/TheHeader";
import TheNav from "@/components/TheNav";

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-nav', TheNav)

app.use(router)

app.mount('#app')

