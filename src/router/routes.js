export default (authGuard, guestGuard) => [
    ...guestGuard([
        {
            path: '/login',
            name: 'login',
            meta: { layout: 'fullscreen' },
            component: () => import(/* webpackChunkName: "login" */ '@/pages/login')
        }
    ]),

    ...authGuard([
        {
            path: '/',
            name: 'home',
            meta: { layout: 'app' },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "home" */ '@/pages/home')
        }
    ])
];