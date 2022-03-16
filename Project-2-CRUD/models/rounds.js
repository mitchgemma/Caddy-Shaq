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
const roundsSchema = new Schema({
    date: { type: String },
    score: { type: Number },
    details: { type: String },
    owner: {
        // references the type 'objectId'
        type: Schema.Types.ObjectID,
        // references the model: 'User'
        ref: 'User'
    }
})

// make our course model
const Rounds = model('rounds', roundsSchema)

/////////////////////////////////////////////////
// export our model
/////////////////////////////////////////////////
module.exports = Rounds