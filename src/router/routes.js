export default (authGuard, guestGuard) => [
    ...guestGuard([
        {
            path: '/login',
            name: 'Login',
            // meta: { layout: 'fullscreen' },
            component: () => import(/* webpackChunkName: "login" */ '@/pages/login')
        },
    ]),

    ...authGuard([
        {
            path: '/',
            name: 'Home',
            // meta: { layout: 'app' },
            component: () => import(/* webpackChunkName: "home" */ '@/pages/home')
        },
    ])
];