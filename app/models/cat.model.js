const mongoose = require('mongoose');

const CatSchema = mongoose.Schema({
    name: String,
    owner: String,
    color: String, 
    unique_sound: String, 
    superpower: String
}, {
    timestamps: true
});

module.exports = mongoose.model('cat', CatSchema);
