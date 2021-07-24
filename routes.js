
module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('pages/home', {
      title: 'Home',
      isHome: true,
      cssLink: 'assets/css/home.css'
    });
  });

};