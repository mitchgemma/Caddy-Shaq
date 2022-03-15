/////////////////////////////////////////////////
// import dependencies
/////////////////////////////////////////////////
const mongoose = require('./connection')

// we'll import our user model so we can populate the info
const User = require('./user')

/////////////////////////////////////////////////
// define our courses model
/////////////////////////////////////////////////
// pull the schema and model constructors from mongoose
const { Schema, model } = mongoose

// make the course schema
const courseSchema = new Schema({
    name: { type: String },
    par: { type: Number },
    image: { type: String },
    location: { type: String }
})

// make our course model
const Course = model('courses', courseSchema)

/////////////////////////////////////////////////
// export our model
/////////////////////////////////////////////////
module.exports = Course