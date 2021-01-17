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
                    import ('pages/AdminIndex.vue')
            },
            {
                path: '/form',
                component: () =>
                    import ('pages/FormCaja.vue')
            },
            {
                path: '/tickets',
                component: () =>
                    import ('pages/AdminTickets.vue')
            },
            {
                path: '/productos',
                component: () =>
                    import ('pages/AdminProductos.vue'),
                meta: { requireAuth: true }
            },
            {
                path: '/addProducto',
                component: () =>
                    import ('pages/AdminAddProducto.vue')
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