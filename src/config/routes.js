import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn/SignIn";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/contact";
import guess from "../pages/guess";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login/*",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
];

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const routesGuess = [
  {
    path: "/guess",
    layout: LayoutBasic,
    component: guess,
  },
];

const routeNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  },
];

const routes = [
  ...routesAdmin,
  ...routesClient,
  ...routeNotFound,
  ...routesGuess,
];

export default routes;
