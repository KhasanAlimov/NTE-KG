const fs = require("fs"),
  path = require("path");

const localJson = fs.readFileSync(path.resolve(__dirname, "dist/data.json")),
  data = JSON.parse(localJson);

module.exports = (app) => {
  const homePageData = data.homePage;

  app.get("/", (req, res) => {
    res.render("pages/home", {
      title: "Home",
      isHome: true,
      homePageData,
    });
  });

  app.get("/about-us", (req, res) => {
    res.render("pages/aboutUs", {
      title: "About us",
      isaboutUs: true,
    });
  });

  app.get("/Off-road-motorcycles", (req, res) => {
    res.render("pages/motorcycles", {
      title: "Off-road motorcycles",
      isMotorcycles: true,
    });
  });

  app.get("/off-road-cars", (req, res) => {
    res.render("pages/cars", {
      title: "Off-road cars",
      isCars: true,
    });
  });

  app.get("/housing", (req, res) => {
    res.render("pages/housing", {
      title: "Housing",
      isHousing: true,
    });
  });
};
