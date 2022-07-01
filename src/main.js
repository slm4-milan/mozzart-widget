import {createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import store from './store';

const TheHeader = defineAsyncComponent(() => import('@/components/TheHeader'));
const TheNav = defineAsyncComponent(() => import('@/components/TheNav'));
const TheMain = defineAsyncComponent(() => import('@/components/TheMain'));
const BettingPair = defineAsyncComponent((() => import('@/components/BettingPair')));

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-nav', TheNav)
app.component('the-main', TheMain)
app.component('betting-pair', BettingPair)
app.use(store);

app.mount('#app')

