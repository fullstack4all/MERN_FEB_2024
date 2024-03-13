const express = require('express')

const placeController = require('../controllers/placeController')

const router = express.Router()



// router.get('/:pid',placeController)
router.post('/',placeController.createPlace)
module.exports = router