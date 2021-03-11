const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  goods: [{type: Types.ObjectId, ref: 'Good'}]
});

module.exports = model('User', schema);