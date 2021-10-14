import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import { Auth } from '@/api/models';
import { state, actions } from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes(authGuard, guestGuard)
});

export default router;

// router.beforeEach(async (to, from, next) => {
//     if (state.token && !state.user) {
//         try {
//             const { data } = await Auth.me();
//             actions.setUser(data);
//         } catch(error) {
//             actions.resetAuth();
//         }
//     }

//     next();
// });

function beforeEnter (routes, callback) {
    return routes.map(route => {
        return { ...route, beforeEnter: callback };
    });
};

function authGuard (routes) {
    return beforeEnter(routes, (to, from, next) => {
        if (!state.token) {
            return next({ name: 'Login' });
        }

        next();
    });
};

function guestGuard (routes) {
    return beforeEnter(routes, (to, from, next) => {
        if (state.token) {
            return next({ name: 'Home' });
        }

        next();
    });
};


















