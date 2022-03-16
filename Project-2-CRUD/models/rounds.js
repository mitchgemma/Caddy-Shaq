/////////////////////////////////////////////////
// import dependencies
/////////////////////////////////////////////////
const mongoose = require('./connection')

// we'll import our user model so we can populate the info

/////////////////////////////////////////////////
// define our courses model
/////////////////////////////////////////////////
// pull the schema and model constructors from mongoose

// make the course schema
const roundsSchema = new mongoose.Schema({
    date: { type: String },
    score: { type: Number },
    details: { type: String },
    owner: {
        // references the type 'objectId'
        // trying to make it so that comments can BE DELETED BY the owner and cannot get it to happen
		type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    }
})


/////////////////////////////////////////////////
// export our model
/////////////////////////////////////////////////
module.exports = roundsSchema