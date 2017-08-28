import VueRouter from 'vue-router'
import ContentWrapper from '../page/content/index.vue'
import ProjectManagePage from '../page/content/projectManage/index.vue'
import SettingWrapper from '../page/setting/index.vue'

const routes = [
  {
    path: '/',
    component: ContentWrapper,
    children: [
      {
        path: '/',
        component: ProjectManagePage
      },
      {
        path: 'projectManage',
        component: ProjectManagePage
      },
    ]
  }, {
    path: '/setting',
    component: SettingWrapper
  }
]

const router = new VueRouter({routes})

export default router
