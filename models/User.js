const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  rights: {type: String},
  goods: [{type: Types.ObjectId, ref: 'Good'}]
});

module.exports = model('User', schema);