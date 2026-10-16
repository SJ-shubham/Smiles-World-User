const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    _id: { 
        type: String, 
        default: 'home_page', 
        immutable: true 
    },
    heroBanner: {
        imageUrl: { type: String, required: true }
    }
}, { timestamps: true, collection: 'Pages' }); 

module.exports = mongoose.model('HomeContent', HomeSchema, 'Pages');