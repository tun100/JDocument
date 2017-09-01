import C404Page from "../../page/error/c404/index.vue";
export default [
  {
    path: "/c404",
    component: C404Page
  },
  {
    path: "/",
    redirect: "/c404"
  }
];
