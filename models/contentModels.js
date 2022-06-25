const { Schema, model } = require("mongoose"),

Employee = new Schema(
  {
    employeeName: {
      ru: {
        type: String,
        required: true,
      },
      en: {
        type: String,
        required: true,
      },
    },
    employeePosition: {
      ru: {
        type: String,
        required: true,
      },
      en: {
        type: String,
        required: true,
      },
    },
    loadedImage: {
      type: String,
    },
    creationTime: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    collation: "Employees",
  }
),

Contacts = new Schema(
  {
    contacts: {
      ru: {
        type: String,
        required: true,
      },
      en: {
        type: String,
        required: true,
      },
    },
  },
  {
    versionKey: false,
    collation: "Contacts",
  }
),

Car = new Schema(
  {
    carName: {
      ru: {
        type: String,
        required: true,
      },
      en: {
        type: String,
        required: true,
      },
    },
    carDescription: {
      ru: {
        type: String,
        required: true,
      },
      en: {
        type: String,
        required: true,
      },
    },
    loadedImage: {
      type: String,
    },
    creationTime: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    collation: "Cars",
  }
);

Motorcycle = new Schema(
  {
    motorcycleName: {
      ru: {
        type: String,
        required: true,
      },
      en: {
        type: String,
        required: true,
      },
    },
    motorcycleDescription: {
      ru: {
        type: String,
        required: true,
      },
      en: {
        type: String,
        required: true,
      },
    },
    loadedImage: {
      type: String,
    },
    creationTime: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    collation: "Motorcycle",
  }
);
module.exports = {
  Employee: model("Employee", Employee),
  Contacts: model("Contacts", Contacts),
  Car: model("Car", Car),
  Motorcycle: model("Motorcycle", Motorcycle),
};
