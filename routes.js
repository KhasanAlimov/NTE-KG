
module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('pages/home', {
      title: 'Home',
      isHome: true,
      cssLink: 'assets/css/home.css'
    });
  });

  app.get('/about-us', (req, res) => {
    res.render('pages/aboutUs', {
      title: 'About us',
      isaboutUs: true,
      cssLink: 'assets/css/aboutUs.css'
    });
  });
};