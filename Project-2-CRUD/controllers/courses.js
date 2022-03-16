/////////////////////////////////////////////////
// import dependencies
/////////////////////////////////////////////////
const express = require('express')
const Courses = require('../models/courses')

/////////////////////////////////////////////////
// import dependencies
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

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// index ALL courses route
router.get('/', (req, res) => {
	// find the courses
	Courses.find({})
		// then render a template AFTER they're found
		.then((courses) => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			res.render('courses/index', { courses, username, loggedIn })
        })
        // redirect to the error page if there is one
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const username = req.session.username
    const loggedIn = req.session.loggedIn
    // render the new course page
	res.render('courses/new', { username, loggedIn })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	req.body.owner = req.session.userId
	Courses.create(req.body)
		.then(course => {
			console.log('this was returned from create', course)
			res.redirect('/courses')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
    const courseId = req.params.id
    // find the course to edit
	Courses.findById(courseId)
        .then(course => {
            const username = req.session.username
			const loggedIn = req.session.loggedIn
			res.render('courses/edit', { course, username, loggedIn })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
router.get('/:id', (req, res) => {
	// first, we need to get the id
	const courseId = req.params.id
	// then we can find a course by its id
	Courses.findById(courseId)
		// once found, we can render a view with the data
		.then((course) => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId
			res.render('courses/show', { course, username, loggedIn, userId })
		})
		// if there is an error, show that instead
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router