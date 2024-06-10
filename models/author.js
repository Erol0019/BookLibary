const Joi = require('joi');
const mongoose = require('mongoose');

const Author = mongoose.model('Author', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isGold: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

function validateAuthor(Author) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(Author, schema);
}

exports.Author = Author; 
exports.validate = validateAuthor;