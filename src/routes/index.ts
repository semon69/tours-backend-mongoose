import { Router } from "express";
import { ToursRoutes } from "../modules/tours/tours.route";
import { UserRoutes } from "../modules/user/user.routes";

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/tours',
    route: ToursRoutes,
  }
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
