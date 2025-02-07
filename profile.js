const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName : {type : String},
    age: {type: Number}
})

const Profile = mongoose.model('Profile',profileSchema)

module.exports = Profile