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
    req.body.owner = req.session.userId
    console.log('updated comment body', req.body)
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

// edit route -> to edit a round
router.get('/edit/:courseId/:roundId', (req, res) => {
	// we need to get the id
    const courseId = req.params.courseId
    const roundId = req.params.roundId
	Courses.findById(courseId)
        .then(course => {
            const myRound = course.rounds.id(roundId)
            // console.log('this is what was sent to edit', course)
            console.log('here is our round', myRound)
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            // render routes edit page
            res.render('rounds/edit', { myRound, course, username, loggedIn })
		})
		.catch((error) => {
            res.redirect(`/error?error=${error}`)
		})
    })
    
    // update route -> sends a put request to our database
router.put('/:courseId/:roundId', (req, res) => {
// get course id
    const courseId = req.params.courseId
    const roundId = req.params.roundId
    console.log('this is the course id', courseId)
    // tell mongoose to update the course
    Courses.findById(courseId)
    .then((course) => {
        course.rounds.id(roundId).date = req.body.date
        course.rounds.id(roundId).score = req.body.score
        course.rounds.id(roundId).details = req.body.details
        console.log('this is the updated date', req.body.date)
                return course.save()
        })
        .then(course => {
            res.redirect(`/courses/${course.id}`)
        })
        .catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// delete -> to delete a round
router.delete('/delete/:courseId/:roundId', (req, res) => {
    const courseId = req.params.courseId
    const roundId = req.params.roundId
    // need to first find the course
    Courses.findById(courseId)
    .then(course => {
        const myRound = course.rounds.id(roundId)
        //only delete the round if the owner created the round
            if (myRound.owner == req.session.userId) {
                myRound.remove()
                return course.save()
            } else {
                return
            }
        })
        .then(course => {
            res.redirect(`/courses/${course.id}`)
        })
        .catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})






// Export the Router
module.exports = router