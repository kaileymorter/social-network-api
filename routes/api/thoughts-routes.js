const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    udpateThought,
    deleteThought
  } = require('../../controllers/thoughts-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(udpateThought)
  .delete(deleteThought);

router
  .route('/:id/:thoughtId/reactions')
  .post()
  .delete()

module.exports = router