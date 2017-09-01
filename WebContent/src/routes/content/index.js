import ContentWrapper from "../../page/content/index.vue";
import ProjectManagePage from "../../page/content/projectManage/index.vue";
import AddProjectPage from "../../page/content/addProject/index.vue";
import SettingWrapper from "../../page/setting/index.vue";
import ProjectManageContentPart from "../../page/content/projectManage/contentShow/index.vue";
import ProjectManageAddContentPart from "../../page/content/projectManage/addContent/index.vue";
import ProjectManageTotalShowPart from "../../page/content/projectManage/totalShow/index.vue";
const contentRoute = [
  {
    path: "/content",
    component: ContentWrapper,
    children: [
      {
        path: "projectManage",
        component: ProjectManagePage,
        children: [
          {
            path: "totalShow",
            component: ProjectManageTotalShowPart
          },
          {
            path: "contentShow",
            component: ProjectManageContentPart
          },
          {
            path: "addContent",
            component: ProjectManageAddContentPart
          }
        ]
      },
      {
        path: "addProject",
        component: AddProjectPage
      },
      {
        path: "setting",
        component: SettingWrapper
      }
    ]
  }
];

export default contentRoute;
