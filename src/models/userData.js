const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    user: {
        type: 'string',
        required: true,
        minLength: 3
    },
    email: {
        type: 'string',
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid email');
            }
        }
    },
    mobile: {
        type: 'number',
        required: true,
        min:10
    },
    comment: {
        type: 'string',
        required: true,
    },
    date: {
        type: 'date',
        default:Date.now
    }
});

const User= mongoose.model('User',userSchema);

module.exports = User;