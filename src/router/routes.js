
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/admin', component: () => import('pages/AdminIndex.vue') },
      { path: '/form', component: () => import('pages/FormCaja.vue') },
      { path: '/tickets', component: () => import('pages/AdminTickets.vue') },
      { path: '/productos', component: () => import('pages/AdminProductos.vue')},
      { path: '/addProducto', component: () => import('pages/AdminAddProducto.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes