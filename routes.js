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

  app.get("/tours", (req, res) => {
    const toursPageData = data.tours;

    res.render("pages/tours/tours", {
      title: "Tours",
      isTours: true,
      toursPageData
    });
  });

  app.get("/tours/silk-way", (req, res) => {
    res.render("pages/tours/silk-way", {
      title: "Silk-way",
      isSilkWay: true,
    });
  });

  app.get("/tours/naryn", (req, res) => {
    res.render("pages/tours/naryn", {
      title: "Naryn",
      isNaryn: true,
    });
  });

  app.get("/tours/pamir", (req, res) => {
    res.render("pages/tours/pamir", {
      title: "Pamir",
      isPamir: true,
    });
  });

  app.get("/tours/tian-shan", (req, res) => {
    res.render("pages/tours/tian-shan", {
      title: "Tian-shan",
      isTianShan: true,
    });
  });

  app.get("/tours/mongolia", (req, res) => {
    res.render("pages/tours/kyrgyz-mongol", {
      title: "Kyrgyz-mongol",
      isKyrgyzMongol: true,
    });
  });

  app.get("/tours/tosor", (req, res) => {
    res.render("pages/tours/tosor", {
      title: "Tosor",
      isTosor: true,
    });
  });

  app.get("/tours/bartang", (req, res) => {
    res.render("pages/tours/bartang", {
      title: "Bartang",
      isBartang: true,
    });
  });

  app.get("/housing", (req, res) => {
    res.render("pages/housing", {
      title: "Housing",
      isHousing: true,
    });
  });
};
