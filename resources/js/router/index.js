import VueRouter from 'vue-router';
import Routes from './routes.js';

const router = new VueRouter({
    mode: 'history',
    routes: Routes
});

export default router;
