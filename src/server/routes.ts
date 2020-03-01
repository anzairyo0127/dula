import { Router } from "express";

export const viewRoutes = Router();

viewRoutes.get("/", (req, res) => {
  res.render("index");
});
