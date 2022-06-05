import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/fudbal', component: null},
        {path: '/kosarka', component: null},
        {path: '/tenis', component: null},
        {path: '/hokej', component: null},
        {path: 'rukomet', component: null},
        {path: '/odbojka', component: null}
    ]
})

export default router;