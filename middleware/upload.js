const multer = require("multer"),
  moment = require("moment");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "dist/assets/img/uploads/");
  },
  filename: function (req, file, cb) {
		const date = moment().format('DDMMYYYY-HHmmss');
    cb(null, `${date}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
		cb(null, true)
	}else {
		cb(null, false)
	}
};

module.exports = multer({storage, fileFilter});