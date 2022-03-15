///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('./connection')
const Courses = require('./courses')

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////
// save the connection in a variable
const db = mongoose.connection;

db.on('open', () => {
    // array of courses
    const startCourses = [
        {
            name: 'St. Andrews Old Course',
            par: 72,
            image: 'https://i.imgur.com/0m0UoD5.jpg',
            location: 'St Andrews, Scotland',
        },
        {
            name: 'August National Golf Club',
            par: 72,
            image: 'https://i.imgur.com/XdDP8kH.jpgs',
            location: 'Augusta, GA',
        },
        {
            name: 'Cypress Point Club',
            par: 72,
            image: 'https://i.imgur.com/vPTsrMI.jpg',
            location: 'Pebble Beach, CA',
        },
        {
            name: 'Shinnecock Hills Golf Club',
            par: 70,
            image: 'https://i.imgur.com/mLlufQU.jpg',
            location: 'Southampton, NY',
        },
        {
            name: 'Newport National Golf Club',
            par: 72,
            image: 'https://i.imgur.com/CBShsVr.png',
            location: 'Newport, RI',
        },
        {
            name: 'Whistling Straits',
            par: 72,
            image: 'https://i.imgur.com/CBShsVr.png',
            location: 'Newport, RI',
        },
        {
            name: 'Pine Valley Golf Club',
            par: 70,
            image: 'https://i.imgur.com/yRYOayt.png',
            location: 'Sheboygan, WI',
        },
        {
            name: 'Merion Golf Club',
            par: 70,
            image: 'https://i.imgur.com/uipLXH8.png',
            location: 'Ardmore, PA',
        },
        {
            name: 'Winged Foot Golf Club',
            par: 72,
            image: 'https://i.imgur.com/Ue4XRfd.png',
            location: 'Mamoroneck, NY',
        },
        {
            name: 'Seminole Golf Club',
            par: 72,
            image: 'https://i.imgur.com/Q2HnCND.png',
            location: 'Juno Beach, FL',
        },
    ]
    // need to delete all of the data that already exists
    Courses.remove({})
        .then(deletedCourses => {
            console.log('this is what remove returns', deletedCourses)
            // once we delete any existing datam we want to seed our data
            Courses.create(startCourses)
                .then((data) => {
                console.log('Here are the new seed courses', data)
                db.close()
                })
                .catch(error => {
                db.close()
                })
                .catch(error => {
                    console.log(error)
                    db.close
            })
        })
})