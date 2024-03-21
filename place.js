const express = require('express')

const {check} = require('express-validator')

const placeController = require('../controllers/placeController')

const router = express.Router()



// router.get('/:pid',placeController)
router.post('/',[check('title').not().isEmpty(),
check('description').isLength({min:5}),
check('address').not().isEmpty()],placeController.createPlace)

router.patch('/:pid', placeController.updateplace)

router.delete('/:pid', placeController.deletePlace)


module.exports = router