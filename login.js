const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({
    lastlogin : {type: Date, default: Date.now()}
})


const Act = mongoose.model('Act',activitySchema)
module.exports = Act