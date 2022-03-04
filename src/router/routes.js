export default [
  {
    path: '/',
    name: 'post',
    component: () => import('@/views/Post/List.vue'),
  },
  {
    path: '/post/:id',
    name: 'detail-post',
    component: () => import('@/views/Post/Detail.vue'),
  },
]
