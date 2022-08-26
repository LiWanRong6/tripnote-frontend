import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '@/views/Front/FrontLayout.vue'
import FrontHomeView from '@/views/Front/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: 'TripNote',
            login: false,
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/Front/RegisterView.vue'),
          meta: {
            title: 'TripNote ｜ 註冊',
            login: false,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/Front/LoginView.vue'),
          meta: {
            title: 'TripNote ｜ 登入',
            login: false,
            admin: false
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/Front/ContactUsView.vue'),
          meta: {
            title: 'TripNote ｜ 聯絡我們',
            login: false,
            admin: false
          }
        },
        {
          path: 'attractions',
          name: 'attractions',
          component: () => import('@/views/Front/AttractionsView.vue'),
          meta: {
            title: 'TripNote ｜ 景點',
            login: false,
            admin: false
          }
        },
        {
          path: 'information',
          name: 'information',
          component: () => import('@/views/Front/TravelInformation.vue'),
          meta: {
            title: 'TripNote ｜ 旅遊資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'reference',
          name: 'reference',
          component: () => import('@/views/Front/ReferenceItinerary.vue'),
          meta: {
            title: 'TripNote ｜ 參考行程',
            login: false,
            admin: false
          }
        },
        {
          path: 'list',
          name: 'itinerary-list',
          component: () => import('@/views/Front/ItineraryList.vue'),
          meta: {
            title: 'TripNote ｜ 歷史紀錄',
            login: true,
            admin: false
          }
        },
        {
          path: 'share',
          name: 'share-itinerary',
          component: () => import('@/views/Front/ShareItinerary.vue'),
          meta: {
            title: 'TripNote ｜ 分享行程',
            login: true,
            admin: false
          }
        },
        {
          path: 'plan',
          name: 'plan-itinerary',
          component: () => import('@/views/Front/PlanItinerary.vue'),
          meta: {
            title: 'TripNote ｜ 規劃行程',
            login: true,
            admin: false
          }
        },
        {
          path: 'memberinfo',
          name: 'memberinfo',
          component: () => import('@/views/Front/MemberInfo.vue'),
          meta: {
            title: 'TripNote ｜ 基本資料',
            login: true,
            admin: false
          }
        },
        {
          path: 'tripinfos/:id',
          name: 'tripinfo',
          component: () => import('@/views/Front/TripInfoView.vue'),
          meta: {
            title: 'TripNote',
            login: false,
            admin: false
          }
        },
        {
          path: 'tripnotes/:id',
          name: 'tripnote',
          component: () => import('@/views/Front/ItineraryView.vue'),
          meta: {
            title: 'TripNote',
            login: false,
            admin: false
          }
        },
        {
          path: 'othertripnote/:id',
          name: 'othertripnote',
          component: () => import('@/views/Front/OtherItinerary.vue'),
          meta: {
            title: 'TripNote',
            login: false,
            admin: false
          }
        }, {
          path: 'edit-share-tripnote/:id',
          name: 'edit-share-tripnote',
          component: () => import('@/views/Member/EditShareTripnote.vue'),
          meta: {
            title: 'TripNote',
            login: true,
            admin: false
          }
        }

      ]
    },
    {
      path: '/admin',
      component: () => import('@/views/Admin/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/Admin/HomeView.vue'),
          meta: {
            title: 'Tripnote ｜ 管理後台',
            login: true,
            admin: true
          }
        },
        {
          path: 'members',
          name: 'members-management',
          component: () => import('@/views/Admin/MembersView.vue'),
          meta: {
            title: 'TripNote ｜ 會員管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'attractions',
          name: 'attractions-management',
          component: () => import('@/views/Admin/AttractionsView.vue'),
          meta: {
            title: 'TripNote ｜ 景點管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'tripinfos',
          name: 'tripinfos-management',
          component: () => import('@/views/Admin/TripInformation.vue'),
          meta: {
            title: 'TripNote ｜ 旅遊資訊管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'itineraries',
          name: 'itineraries-management',
          component: () => import('@/views/Admin/ItinerariesView.vue'),
          meta: {
            title: 'TripNote ｜ 行程管理',
            login: true,
            admin: true
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: 'Tripnote | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})
router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})
export default router
