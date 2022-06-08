import {createRouter, createWebHistory} from 'vue-router';
import TheMain from "@/components/TheMain";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/fudbal'},
        {path: '/fudbal', component: TheMain},
        {path: '/kosarka', component: TheMain},
        {path: '/hokej', component: null},
        {path: '/rukomet', component: null},
        {path: '/odbojka', component: null},
        {path: '/:notFound(.*)', component: null},
        {}
    ]
})

export default router;