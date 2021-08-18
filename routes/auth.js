module.exports = (app) => {
  app.get('/auth', (req, res) => {
		res.send('hello this page is auth');
	})
}