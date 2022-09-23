
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home_page/view/HomePage.vue') },
      { path: 'pokedex', component: () => import('pages/pokedex_page/view/PokedexPage.vue') },
      { path: 'lendarios', component: () => import('pages/lendarios_page/view/LendariosPage.vue') },
      { path: 'documentacao', component: () => import('pages/documentacao_page/view/DocumentacaoPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
