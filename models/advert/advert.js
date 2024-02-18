const { Schema, model } = require('mongoose');

const positionSchema = {
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
};

const adSchema = new Schema(
  {
    image: { type: String, default: '' },
    title: { type: String, required: [true, 'Enter a title for your ad'] },
    price: { type: Number, required: [true, 'Enter the ad price'] },
    description: {
      type: String,
      required: [true, 'Add a description of the ad'],
    },
    position: {
      type: positionSchema,
      required: [true, 'Enter the coordinates of the ad'],
    },
  },
  { versionKey: false, timestamps: true }
);

const Ad = model('ad', adSchema);
module.exports = { Ad };
