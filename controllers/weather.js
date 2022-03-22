/////////////////////////////////////////////////
// import dependencies
/////////////////////////////////////////////////
const express = require('express')
const Courses = require('../models/courses')
const mongoose = require('mongoose')
const fetch = require('node-fetch')

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
router.get('/:courseId', (req, res) => {
    const courseId = req.params.courseId
    Courses.findById(courseId)
    
        .then(course => {
            console.log('this is the course ID', course)
        })
        .catch(error => {
            res.redirect(`/error?error=${error}`)
        })
    })
// const requestURL = `https://api.openweathermap.org/data/2.5/weather?zip=${Courses.zip},us&units=imperial&appid=a6aacdad0768ad4abfd787d582b7b88b`
//     fetch(requestURL)
//         .then((apiResponse) => {
//             return apiResponse.json();
//         })
//         .then((jsonData) => {
//             console.log("here is the weather data", jsonData);
//         })
// })

// Export the Router
module.exports = router