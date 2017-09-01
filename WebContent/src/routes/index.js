import VueRouter from "vue-router";
import ContentRoutes from "./content/";
import RegisterRoutes from "./register/";
import ForgetPasswordRoutes from "./forgetPassword/";
import ExceptionRoutes from "./exception/";
import LoginRoutes from "./login/";

const routes = [
  ...LoginRoutes,
  ...ContentRoutes,
  ...RegisterRoutes,
  ...ForgetPasswordRoutes,
  ...ExceptionRoutes
];

const router = new VueRouter({ routes });

export default router;
