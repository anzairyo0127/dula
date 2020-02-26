import { Router } from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";

import html from "./pages";
import Menu from "./components/menu/Menu";

export const viewRoutes = Router();

viewRoutes.get("/", (req, res) => {
  const menu: string = renderToString(React.createElement(Menu));
  res.send(html({ menu }));
});
