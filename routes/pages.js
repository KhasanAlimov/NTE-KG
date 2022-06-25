const fs = require("fs"),
  path = require("path"),
  url = require("url"),
  { Employee, Contacts, Car, Motorcycle } = require("../models/contentModels");

const localJson = fs.readFileSync(path.resolve(__dirname, "../dist/data.json")),
  data = JSON.parse(localJson);

const globalHelpers = (req) => {
  return {
    changeLang: (text) => {
      let browserLang = req.acceptsLanguages("en", "ru"),
      	language = text.en;
				urlParse = url.parse(req.url, true)

			const checkLang = (item) => {
				if (item === "ru") {
					language = text.ru;
				} else if (item === "en") {
					language = text.en;
				}else {
					language = text.en;
				}
			}

			req.url.includes(urlParse.search)
				?checkLang(req.query.lang)
				:checkLang(browserLang);
      
      return language;
    },
  };
};

module.exports = (app) => {
  const homePageData = data.homePage;

  app.get("/", (req, res) => {
    res.render("pages/home", {
      title: "Home",
      isHome: true,
      homePageData,
    });
  });

  app.get("/about-us", async (req, res) => {
    const emploees = await Employee.find().lean();
    res.render("pages/aboutUs", {
      title: "About us",
      isaboutUs: true,
      emploees,
      helpers: globalHelpers(req),
    });
  });

  app.get("/contacts", async (req, res) => {
		let contacts = await Contacts.find().lean();
    contacts = contacts[0];

    res.render("pages/contacts", {
      title: "Contacts",
      isContacts: true,
			contacts,
			helpers: globalHelpers(req),
    });
  });

  app.get("/Off-road-motorcycles", async (req, res) => {
    const motorcycles = await Motorcycle.find().lean();
    res.render("pages/motorcycles", {
      title: "Off-road motorcycles",
      isMotorcycles: true,
      motorcycles,
      helpers: globalHelpers(req),
    });
  });

  app.get("/off-road-cars", async (req, res) => {
    const cars = await Car.find().lean();
    res.render("pages/cars", {
      title: "Off-road cars",
      isCars: true,
      cars,
      helpers: globalHelpers(req),
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
      aboutKyrgyzstanData,
    });
  });

  app.use((req, res, next) => {
    res.status(404).render("pages/error404");
  });
};
