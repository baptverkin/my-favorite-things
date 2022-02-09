import express from "express";
import nunjucks from "nunjucks";
import { mySpots } from "./my-spots";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("home", { mySpots });
});

app.get("/spots/:spotName", (request, response) => {
  const spotName = request.params.spotName;
  const spot = mySpots.find((element) => {
    return element.name === spotName;
  });
  response.render("spot-details", { spot });

  // // for (let i = 0; i < mySpots.length; i++)
  //   if (mySpots[i].name === routeParameters.spotName) {
  //   } else {
  //     response.status(404).render("not-found", { error: "Spot not found" });
});

app.listen(3001, () => {
  console.log("Server started on http://localhost:3001");
});
