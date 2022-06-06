import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import TheHeader from "@/components/TheHeader";
import TheNav from "@/components/TheNav";
import TheMain from "@/components/TheMain";
import BettingPair from "@/components/BettingPair";

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-nav', TheNav)
app.component('the-main', TheMain)
app.component('betting-pair', BettingPair)

app.use(router)

app.mount('#app')

