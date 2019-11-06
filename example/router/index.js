import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import config from '../config';

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    initialized: false,
    routes: []
});

router.beforeEach((to, from, next) => {
    if (router.options.initialized) next();
    else {
        router.addRoutes(config.routes);
        router.options.initialized = true;
        next(to);
    }

    document.title = to.name ? `${to.name} - ${config.title}` : `${config.title}`;
});

export default router;
