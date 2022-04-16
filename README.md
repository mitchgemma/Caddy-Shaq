# Caddy Shaq

## App Description

Users will be able to use the app to add their favorite golf courses and track how well they shot during their recent rounds. They will be able to make an account which will allow them to customize their courses and recent rounds. Users will be able to add courses to their index page, and once the course is created, they will be able to add information to that course such as the date they played, score they shot, and any additional details. Seeded data will be used as a replacement for the public API.

### App Requirements:

- Each user will be able to make an account where they can add their favorite golf courses and keep track of their recent rounds that they played
- There will be a nav bar for easy navigation throughout the apps' pages
- Index page will look like a grid and will display the courses name, a picture of the course, and the course par
- On each course page, users will be able to document recent rounds they have played at that course
- Users will be able to track multiple rounds on the same course show page, and be able to make edits and deletions for each round
- Users will have the option to remove courses from their index page, or remove specific rounds from the show page

### Stretch Goals:

- Track individual holes for each course
  - Drop down menu for each date that includes each hole
- Make the app interactive, such as sharing when other users added a new round and allowing other users to comment on the post, similar to social media
- Users will be able to select additional details to show on their display page, such as hole distances
- Use a weather API to include the weather in the location of the golf course

### Technologies:

- HTML
- CSS and Bootstrap
- Javascript
- Node.js
- Mongo / Mongoose
- Express
- Liquid

### Tasks:

| Command      | Effect                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------- |
| npm start    | Starts a development server with nodemon that automatically refreshes when you change something.   |
| npm run seed | Deletes the seeded data that is in the database and reseeds with only the data in the seed.js file |

### RESTful Routes:

| Name   | Path                              | Action Verb | What it does                                                 |
| ------ | --------------------------------- | ----------- | ------------------------------------------------------------ |
| INDEX  | /courses                          | GET         | Shows all golf courses                                       |
| SHOW   | /courses/:courseid                | GET         | Shows all information the given golf course id               |
| CREATE | /courses/new                      | POST        | Creates a new golf course                                    |
| INDEX  | /courses/mine                     | GET         | Shows golf courses only the user signed in has created       |
| UPDATE | /courses/:courseid/edit           | PUT         | Allows edits and updates to be made to the given golf course |
| DELETE | /courses/:courseid                | DELETE      | Deletes the golf course                                      |
| CREATE | /rounds/:courseid                 | POST        | Creates a new round to the given course                      |
| GET    | /rounds/edit/:courseid/:roundid   | GET         | shows the for to edit a round for a given golf course        |
| UPDATE | /rounds/:courseid/:roundid        | PUT         | Updates the round for the given golf course                  |
| DELETE | /rounds/delete/:courseId/:roundId | DELETE      | Delete the round for a given golf course                     |

### Instructions for use:

1. Fork and clone this repo
2. Create a .env file and add the following:
   - DATABASE_URL=mongodb://localhost/
   - PORT=3000
   - SECRET=addAnySecretHereAsLongAsItIsInYourENVfile
3. Run npm install in your terminal to install all the necessary node packages

### ERD

![ERD Image](https://i.imgur.com/awx66x8.jpg)

### Wireframes

![Home Page](https://i.imgur.com/PQO3tVE.jpg)

![Index Page](https://i.imgur.com/D42jIFa.jpg)

![Show Page](https://i.imgur.com/zpnmlN6.jpg)

![Add Course](https://i.imgur.com/rsJDWkV.jpg)

![Sign-up / Log in](https://i.imgur.com/D42jIFa.jpg)
