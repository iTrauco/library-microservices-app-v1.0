// LOAD MONGOOSE
const mongoose = require('mongoose')

mongoose.model('Customer', {
    // ATTRIBUTES | name, age, address
    name: {
        type: String, 
        require: true
    },
    age: {
        type: Number, 
        require: true
    },
    address: {
        type: String, 
        require: true
    }
});