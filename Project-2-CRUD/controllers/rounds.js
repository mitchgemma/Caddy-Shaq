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
// POST -> to create a round
router.post('/:courseId', (req, res) => {
    const courseId = req.params.courseId
    console.log('first round body', req.body)
    
    // we'll find the round with the roundId
    Courses.findById(courseId)
        .then(course => {
            // then we'll send req.body to the rounds array
            course.rounds.push(req.body)
            // save the course
            return course.save()
        })
        .then(course => {
            // redirect
            res.redirect(`/courses/${course.id}`)
        })
        // or show an error if we have one
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})

// delete -> to delete a round







// Export the Router
module.exports = router