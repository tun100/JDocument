import VueRouter from 'vue-router'
import ContentWrapper from '../page/content/index.vue'
import ProjectManagePage from '../page/content/projectManage/index.vue'
import AddProjectPage from '../page/content/addProject/index.vue'
import SettingWrapper from '../page/setting/index.vue'
import LoginWrapper from '../page/login/index.vue'
import RegisterWrapper from '../page/register/index.vue'
import ForgetPasswordWrapper from '../page/forgetPassword/index.vue'
import C404Page from '../page/error/c404/index.vue'

const routes = [
  {
    path: '/',
    component: LoginWrapper,
  },
  {
    path: "/content",
    component: ContentWrapper,
    children: [
      {
        path: 'projectManage',
        component: ProjectManagePage
      },
      {
        path: 'addProject',
        component: AddProjectPage
      }, {
        path: 'setting',
        component: SettingWrapper
      }
    ]
  },
  {
    path: "/register",
    component: RegisterWrapper
  },
  {
    path: "/forgetPassword",
    component: ForgetPasswordWrapper,
    redirect:"/c404"
  },
  {
    path: "/c404",
    component: C404Page
  }
]

const router = new VueRouter({routes})

export default router