const passport = require("passport"),
  url = require("url"),
  {Employee, Contacts, Car, Motorcycle} = require("../models/contentModels"),
  bcrypt = require("bcrypt");

module.exports = (app, AuthModel) => {
  app.get("/auth", ensureAuthenticatedOut, (req, res) => {
    res.render("admin/auth", {
      title: "Login",
      isAuth: true,
      error: req.query.error,
    });
  });

  app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/auth?error=true" }),
    function (req, res) {
      res.redirect("/admin-panel");
    }
  );

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/auth");
  }

  function ensureAuthenticatedOut(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/admin-panel");
  }

  app.get("/admin-panel", /*ensureAuthenticated,*/ async (req, res) => {
      const emploees = await Employee.find().lean();
      const cars = await Car.find().lean();
      const motorcycles = await Motorcycle.find().lean();
      let contacts = await Contacts.find().lean();
      contacts = contacts[0];

      res.render("admin/adminPanel", {
        title: "Admin panel",
        isAdminPanel: true,
        pageName: req.query.pageName,
        emploees,
        contacts,
        cars,
        motorcycles,
        helpers: {
          pagePath: function () {
            let urlQuery = this.pageName,
              urlParse = url.parse(req.url, true),
              actualPage = "adminContent/dashboard";

            req.url.includes(urlParse.search)
              ? (actualPage = `adminContent/${urlQuery}`)
              : actualPage;

            return actualPage;
          },
        },
      });
    }
  );

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // app.post(
  //   "/register",
  //   (req, res, next) => {
  //     AuthModel.findOne({ username: req.body.username }, function (err, user) {
  //       if (err) {
  //         next(err);
  //       } else if (user) {
  //         res.redirect("/");
  //       } else {
  //         const hash = bcrypt.hashSync(req.body.password, 10);
  //         AuthModel.create(
  //           {
  //             username: req.body.username,
  //             password: hash,
  //           },
  //           (err, doc) => {
  //             if (err) {
  //               res.redirect("/auth");
  //             } else {
  //               next(null, doc);
  //             }
  //           }
  //         );
  //       }
  //     });
  //   },
  //   passport.authenticate("local", { failureRedirect: "/auth" }),
  //   (req, res, next) => {
  //     res.redirect("/admin-panel");
  //   }
  // );
};
