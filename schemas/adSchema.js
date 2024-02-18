const Joi = require('joi');

const adSchema = Joi.object({
  image: Joi.string().default('').messages({
    'string.base': 'Image must be a string',
  }),
  title: Joi.string().required().messages({
    'any.required': 'Enter a title for your ad',
    'string.base': 'Title must be a string',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Enter the ad price',
    'number.base': 'Price must be a number',
  }),
  description: Joi.string().required().messages({
    'any.required': 'Add a description of the ad',
    'string.base': 'Description must be a string',
  }),
  position: Joi.string()
    .required()
    .pattern(/^-?\d+(\.\d+)?,\s*-?\d+(\.\d+)?$/)
    .messages({
      'any.required': 'Enter the coordinates of the ad',
      'string.base': 'Position must be a string',
      'string.pattern.base':
        'Position must be in the format "latitude, longitude". For example, "49.842957, 24.031111"',
    }),
}).options({ abortEarly: false });

module.exports = adSchema;
