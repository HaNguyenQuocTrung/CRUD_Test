const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VocabSchema = new Schema(
  {
    english: {
        type: String,
        required: 'English word cannot be blank'
    },
    german: {
        type: String,
        required: 'German word cannot be blank'
    },
    vietnam: {
        type: String,
        required: 'VietNam word cannot be blank'
    },
    japan: {
        type: String,
        required: 'Japan word cannot be blank'
    },
    italy: {
        type: String,
        required: 'Italy word cannot be blank'
    },
  }, 
  { collection: 'vocab'}
);

module.exports = mongoose.model('Vocab', VocabSchema);