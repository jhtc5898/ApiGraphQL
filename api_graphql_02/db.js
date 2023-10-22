const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://johnecu15:UPS123456789@cluster0.agylftr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProductModel = mongoose.model('Product', {
  name: String,
  numeroSerial: String,
  peso: String,
  tamano: String,
  value: Number,
});

module.exports = ProductModel