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
            name: 'Sand Hills Golf Course',
            par: 71,
            image: 'https://i.imgur.com/zCDqxMl.png',
            location: 'Mullen, NE',
            zip: '69152'
        },
        {
            name: 'August National Golf Club',
            par: 72,
            image: 'https://i.imgur.com/XdDP8kH.jpgs',
            location: 'Augusta, GA',
            zip: '30805'

        },
        {
            name: 'Cypress Point Club',
            par: 72,
            image: 'https://i.imgur.com/vPTsrMI.jpg',
            location: 'Pebble Beach, CA',
             zip: '93953'
        },
        {
            name: 'Shinnecock Hills Golf Club',
            par: 70,
            image: 'https://i.imgur.com/mLlufQU.jpg',
            location: 'Southampton, NY',
             zip: '11968'
        },
        {
            name: 'Newport National Golf Club',
            par: 72,
            image: 'https://i.imgur.com/CBShsVr.png',
            location: 'Newport, RI',
            zip: '02840'
        },
        {
            name: 'Whistling Straits',
            par: 72,
            image: 'https://i.imgur.com/9a2ScTn.png',
            location: 'Sheboygan, WI',
            zip: '53081'
        },
        {
            name: 'Pine Valley Golf Club',
            par: 70,
            image: 'https://i.imgur.com/yRYOayt.png',
            location: 'Pine Valley, NJ',
            zip: '08021'
        },
        {
            name: 'Merion Golf Club',
            par: 70,
            image: 'https://i.imgur.com/uipLXH8.png',
            location: 'Ardmore, PA',
            zip: '19003'
        },
        {
            name: 'Winged Foot Golf Club',
            par: 72,
            image: 'https://i.imgur.com/Ue4XRfd.png',
            location: 'Mamoroneck, NY',
            zip: '10543'
        },
        {
            name: 'Seminole Golf Club',
            par: 72,
            image: 'https://i.imgur.com/Q2HnCND.png',
            location: 'Juno Beach, FL',
            zip: '33408'
        }
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