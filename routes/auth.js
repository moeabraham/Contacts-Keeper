
// we get express so we can use the router
const express = require('express');
const router = express.Router();

//  @route  Get api/auth
// @desc    Get logged in user
// @access  Private 

router.get('/', (req, res) => {
    res.send('Get logged in')
})


//  @route  POST api/auth
// @desc    AUTH USER AND GET TOKEN
// @access  PUBLIC 

router.post('/', (req, res) => {
    res.send('LOG IN USER')
})


module.exports = router;