import {createRouter, createWebHistory} from 'vue-router';
import TheMain from "@/components/TheMain";
import TestTest from "@/components/TestTest";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/fudbal'},
        {path: '/fudbal', component: TheMain},
        {path: '/kosarka', component: TheMain},
        {path: '/tenis', component: TestTest},
        {path: '/hokej', component: null},
        {path: '/rukomet', component: null},
        {path: '/odbojka', component: null},
        {path: '/:notFound(.*)', component: null},
        {}
    ]
})

export default router;