<h1 align="center">Social Network API Challenge</h1>

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

  ## Description:
  This is the back end code for a social network web application that uses a NoSQL database. The API's for this application allow users to share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. 

  ## Table of Contents:
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceprance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Video](#video)
  * [Questions](#questions)
  
  ## User Story
  ```
  AS A social media startup
  I WANT an API for my social network that uses a NoSQL database
  SO THAT my website can handle large amounts of unstructured data
  ```
  
  ## Acceptance Criteria
  ```
  GIVEN a social network API
  WHEN I enter the command to invoke the application
  THEN my server is started and the Mongoose models are synced to the MongoDB database
  WHEN I open API GET routes in Insomnia Core for users and thoughts
  THEN the data for each of these routes is displayed in a formatted JSON
  WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
  THEN I am able to successfully create, update, and delete users and thoughts in my database
  WHEN I test API POST and DELETE routes in Insomnia Core
  THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
  ```
  
  ## Installation
  NPM init
  NPM install

  ## Usage:
  To run/test this application, enter the root directory of the application and then enter "npm start" in the command line of your terminal. Once your server is started, navigate to Insomia to test the different api get, post, put, and delete routes:
 
  localhost:3001/api/users
   * GET all users
   * POST a new user
  localhost:3001/api/users/:id - get, put, delete
  * GET a single user by its _id and populated thought and friend data
  * PUT to update a user by its _id
  * DELETE to remove user by its _id
  localhost:3001/api/users/:id/friends/friendId
  * POST to add a new friend to a user's friend list
  * DELETE to remove user by its _id
  localhost:3001/api/thoughts
  * GET to get all thoughts
  localhost:3001/api/thoughts/:id
  * GET to get a single thought by its _id
  * PUT to update a thought by its _id
  * DELETE to remove a thought by its _id
  localhost:3001/api/api/thoughts/:userId
  * POST to create a new thought and push the created thought's _id to the associated user's thought array
  localhost:3001/api/thoughts/:thoughtId/reactions - post
  * POST to create a reaction stored in a single thought's reactions array field
  localhost:3001/api/thoughts/:thoughtId/reactionId -
  * DELETE to pull and remove a reaction by the reaction's reactionId value

  ## License:
  Unlicense

  ## Contributing:
  https://www.contributor-covenant.org/

  ## Video:

  ## Questions:
  [My Github Account](https://github.com/kaileymorter)

  If you have additional questions about this project, please reach me at: k_morter@outlook.com
