const upload = require("../middleware/upload"),
  { Employee, Contacts, Car, Motorcycle } = require("../models/contentModels"),
  moment = require("moment"),
  fs = require("fs"),
  { promisify } = require("util"),
  unlinkAsync = promisify(fs.unlink);

module.exports = (app) => {
  const date = moment().format("DD.MM.YYYY-HH:mm:ss");

  // Create post function
  const createPost = ({ path, imgLoader = "", dataModel, action }) => {
    app.post(path, upload.single(imgLoader), (req, res) => {
      dataModel.create(action(req, res), (err, doc) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect("back");
        }
      });
    });
  };

  // Delete post function
  const deletePost = (path, dataModel) => {
    app.post(`/${path}/delete-object`, (req, res) => {
      const id = req.query.id;
  
      dataModel.findByIdAndDelete(id, async function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Deleted : ", docs);
  
          if (docs.loadedImage !== "") {
            await unlinkAsync(`dist/assets/img/uploads/${docs.loadedImage}`);
          }
        }
      });
    });
  };

  // Update post function
  const updatePost = ({path, imgLoader, dataModel, action}) => {
    app.post(
      `/${path}/update-object`,
      upload.single(imgLoader),
      async (req, res) => {
        const updatedItem = await dataModel.findById(req.query.id);
  
        action(req, updatedItem)
  
        if (req.file) {
          if (updatedItem.loadedImage !== "") {
            await unlinkAsync(
              `dist/assets/img/uploads/${updatedItem.loadedImage}`
            );
  
            updatedItem.loadedImage = req.file.filename;
          } else {
            updatedItem.loadedImage = req.file.filename;
          }
        }
  
        await updatedItem.save();
  
        res.redirect("back");
      }
    );
  }

  // Create employee
  createPost({
    path: "/create_employee",
    imgLoader: "employee_img",
    dataModel: Employee,
    action: (req, res) => {
      return {
        employeeName: {
          ru: req.body.employee_name,
          en: req.body.employee_name_en,
        },
        employeePosition: {
          ru: req.body.employee_position,
          en: req.body.employee_position_en,
        },
        loadedImage: req.file ? req.file.filename : "",
        creationTime: date,
      };
    },
  });

  // Create car
  createPost({
    path: "/add_car",
    imgLoader: "car_img",
    dataModel: Car,
    action: (req, res) => {
      return {
        carName: {
          ru: req.body.car_name_ru,
          en: req.body.car_name_en,
        },
        carDescription: {
          ru: req.body.car_description_ru,
          en: req.body.car_description_en,
        },
        loadedImage: req.file ? req.file.filename : "",
        creationTime: date,
      };
    },
  });

  // Create Motorcycle
  createPost({
    path: "/add_motorcycle",
    imgLoader: "motorcycle_img",
    dataModel: Motorcycle,
    action: (req, res) => {
      return {
        motorcycleName: {
          ru: req.body.motorcycle_name_ru,
          en: req.body.motorcycle_name_en,
        },
        motorcycleDescription: {
          ru: req.body.motorcycle_description_ru,
          en: req.body.motorcycle_description_en,
        },
        loadedImage: req.file ? req.file.filename : "",
        creationTime: date,
      };
    },
  });

  // delete
  deletePost('aboutUs', Employee);
  deletePost('cars', Car);
  deletePost('motorcycles', Motorcycle);

  // Update employee
  updatePost({
    path: 'aboutUs',
    imgLoader: 'employee_img',
    dataModel: Employee,
    action: (req, updatedItem) => {
      return (
        updatedItem.employeeName.ru = req.body.employee_name,
        updatedItem.employeePosition.ru = req.body.employee_position,
        updatedItem.employeeName.en = req.body.employee_name_en,
        updatedItem.employeePosition.en = req.body.employee_position_en
      );
    }
  })

  // Update cars
  updatePost({
    path: 'cars',
    imgLoader: 'car_img',
    dataModel: Car,
    action: (req, updatedItem) => {
      return (
        updatedItem.carName.ru = req.body.car_name_ru,
        updatedItem.carDescription.ru = req.body.car_description_ru,
        updatedItem.carName.en = req.body.car_name_en,
        updatedItem.carDescription.en = req.body.car_description_en
      );
    }
  })

   // Update motorcycles
   updatePost({
    path: 'motorcycles',
    imgLoader: 'motorcycle_img',
    dataModel: Motorcycle,
    action: (req, updatedItem) => {
      return (
        updatedItem.motorcycleName.ru = req.body.motorcycle_name_ru,
        updatedItem.motorcycleDescription.ru = req.body.motorcycle_description_ru,
        updatedItem.motorcycleName.en = req.body.motorcycle_name_en,
        updatedItem.motorcycleDescription.en = req.body.motorcycle_description_en
      );
    }
  })

  app.post("/contacts_update", async (req, res) => {
    const contacts = await Contacts.find();
    let text = contacts[0];

    text.contacts.ru = req.body.contacts_ru;
    text.contacts.en = req.body.contacts_en;

    await text.save();

    res.redirect("back");
  });
};
