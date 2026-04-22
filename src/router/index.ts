import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/GameLayoutView.vue'),
      children: [
        {
          path: '/game/1',
          name: 'level1',
          component: () => import('@/views/stages/StageOneView.vue'),
        },
        {
          path: '/game/2',
          name: 'level2',
          component: () => import('@/views/stages/StageTwoView.vue'),
        },
        {
          path: '/game/3',
          name: 'level3',
          component: () => import('@/views/stages/StageThreeView.vue'),
        },
        {
          path: '/game/4',
          name: 'level4',
          component: () => import('@/views/stages/StageFourView.vue'),
        },
        {
          path: '/game/end',
          name: 'end',
          component: () => import('@/views/stages/EndView.vue'),
        },
      ],
    },
  ],
})

export default router
