const express = require('express')

const placeController = require('../controllers/placeController')

const router = express.Router()



// router.get('/:pid',placeController)
router.post('/',placeController.createPlace)
router.patch('/:pid', placeController.updateplace)
router.delete('/:pid', placeController.deletePlace)


module.exports = router