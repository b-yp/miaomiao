export default {
  path: '/cinema',
  component: () => import ('@/views/Cinema'),
  children: [
    {
      path: '/cinema/cinemaList',
      component: () => import ('@/components/CinemaList')
    },
    {
      path: '/cinema',
      redirect: '/cinema/cinemaList'
    }
  ]
}