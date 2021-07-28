
module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('pages/home', {
      title: 'Home',
      isHome: true
    });
  });

  app.get('/about-us', (req, res) => {
    res.render('pages/aboutUs', {
      title: 'About us',
      isaboutUs: true
    });
  });

  app.get('/housing', (req, res) => {
    res.render('pages/housing', {
      title: 'Housing',
      isHousing: true
    });
  });

};