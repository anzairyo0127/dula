import path from "path";

import e, { Express, json, urlencoded } from "express";

import { viewRoutes } from "./server/routes";
import { apiRoutes } from "./api/controllers";

export const createApp: (config: string) => e.Express = config => {
  const app: Express = e();
  // Setup Views
  //app.set('views', path.join(__dirname, 'views/html'));
  app.set("view engine", "pug")
  app.use("/public", e.static("public"));
  app.use("/", viewRoutes);

  // Setup WebApi
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use("/api/v1", apiRoutes);
  return app;
};
