export default (authGuard, guestGuard) => [
    ...guestGuard([
        {
            path: '/login',
            name: 'Login',
            // meta: { layout: 'fullscreen' },
            component: () => import(/* webpackChunkName: "login" */ '@/pages/login')
        },
        {
            path: '/registration',
            name: 'Registration',
            // meta: { layout: 'app' },
            component: () => import(/* webpackChunkName: "home" */ '@/pages/registration')
        },
         {
            path: '/ticketscreate',
            name: 'TicketsCreate',
            // meta: { layout: 'app' },
            component: () => import(/* webpackChunkName: "home" */ '@/pages/client/tickets-create/TicketsCreate')
        },
        {
           path: '/tickets',
           name: 'Tickets',
           // meta: { layout: 'app' },
           component: () => import(/* webpackChunkName: "home" */ '@/pages/client/tickets/Tickets')
       },
       {
          path: '/ticketsadmin',
          name: 'TicketsAdmin',
          // meta: { layout: 'app' },
          component: () => import(/* webpackChunkName: "home" */ '@/pages/admin/tickets/TicketsAdmin')
      }
    ]),

...authGuard([
    {
        path: '/',
        name: 'Home',
        // meta: { layout: 'app' },
        component: () => import(/* webpackChunkName: "home" */ '@/pages/home')
    },
    
])
]