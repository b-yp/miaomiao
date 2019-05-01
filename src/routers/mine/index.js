export default {
  path: '/mine',
  component: () => import ('@/views/Mine'),
  children: [
    {
      path: 'login',
      component: () => import ('@/components/Login')
    },
    {
      path: '/mine',
      redirect: '/mine/login'
    }
  ]
}