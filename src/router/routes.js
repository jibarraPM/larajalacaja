const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                name: 'login',
                path: '/login',
                component: () =>
                    import ('pages/Login.vue')
            },
            {
                name: 'admin',
                path: '/admin',
                component: () =>
                    import ('pages/AdminIndex.vue'),
                meta: { requireAuth: true }
            },
            {
                name: 'form',
                path: '/form',
                component: () =>
                    import ('pages/FormCaja.vue')
            },
            {
                name: 'mediopago',
                path: '/mediopago/:id',
                component: () =>
                    import ('pages/MedioPago.vue')
            },
            {
                name: 'tickets',
                path: '/tickets',
                component: () =>
                    import ('pages/AdminTickets.vue'),
                meta: { requireAuth: true }
            },
            {
                name: 'productos',
                path: '/productos',
                component: () =>
                    import ('pages/AdminProductos.vue'),
                meta: { requireAuth: true }
            },
            {
                name: 'addProducto',
                path: '/addProducto',
                component: () =>
                    import ('pages/AdminAddProducto.vue'),
                meta: { requireAuth: true }
            },
            {
                name: 'editTicket',
                path: '/tickets/:id',
                component: () =>
                    import ('pages/AdminEditTicket.vue'),
                meta: { requireAuth: true }
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes