import { createRouter, createWebHashHistory } from 'vue-router';
import CapstoneApp from '../components/CapstoneApp.vue';
import Photo from '../components/Photo.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: CapstoneApp,
            children: [
              {
                path: 'albums/:id',
                component: Photo
              },
            ]
        }
    ]
});

export { router };