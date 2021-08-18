const fs = require("fs"),
  path = require("path");

const localJson = fs.readFileSync(path.resolve(__dirname, "../dist/data.json")),
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

  app.get("/contacts", (req, res) => {
    res.render("pages/contacts", {
      title: "Contacts",
      isContacts: true,
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
      toursPageData,
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
  app.get("/tires", (req, res) => {
    res.render("pages/tires", {
      title: "Tires",
      isTires: true,
    });
  });
  app.get("/oil", (req, res) => {
    res.render("pages/oil", {
      title: "Oil",
      isOil: true,
    });
  });
  app.get("/save-budget", (req, res) => {
    res.render("pages/save-budget", {
      title: "saveBudget",
      isSaveBudget: true,
    });
  });
  app.get("/repair-shop", (req, res) => {
    res.render("pages/repair-shop", {
      title: "repairShop",
      isRepairShop: true,
    });
  });
  app.get("/about-mongolia", (req, res) => {
    const aboutMongoliaData = data.aboutCountries.mongolia;
    res.render("pages/about-countries/about-mongolia", {
      title: "About-mongolia",
      isAboutMongolia: true,
      aboutMongoliaData,
    });
  });
  app.get("/about-china", (req, res) => {
    const aboutChinaData = data.aboutCountries.china;
    res.render("pages/about-countries/about-china", {
      title: "About-china",
      isAboutChina: true,
      aboutChinaData,
    });
  });

  app.get("/about-tajikistan", (req, res) => {
    const aboutTajikistanData = data.aboutCountries.tajikistan;
    res.render("pages/about-countries/about-tajikistan", {
      title: "About-tajikistan",
      isAboutTajikistan: true,
      aboutTajikistanData,
    });
  });

  app.get("/about-kyrgyzstan", (req, res) => {
    const aboutKyrgyzstanData = data.aboutCountries.kyrgyzstan;
    res.render("pages/about-countries/about-kyrgyzstan", {
      title: "About-kyrgyzstan",
      isAboutKyrgyzstan: true,
      aboutKyrgyzstanData
    });
  });


  app.use((req, res, next) => {
    res.status(404).render("pages/error404")
  });
};
