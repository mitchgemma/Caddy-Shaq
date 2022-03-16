/////////////////////////////////////////////////
// import dependencies
/////////////////////////////////////////////////
const express = require('express')
const Courses = require('../models/courses')
const mongoose = require('mongoose')
/////////////////////////////////////////////////
// Create router
/////////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Router Middleware
////////////////////////////////////////////
router.use((req, res, next) => {
	// checking the loggedIn boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/auth/login')
	}
})

/////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////

router.get('/', (req, res) => {
	// find the fruits
	res.render("./rounds")
})

// Export the Router
module.exports = router