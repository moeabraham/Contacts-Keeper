// we get express so we can use the router
const express = require('express');
const router = express.Router();

//  @route  Get api/contacts
// @desc    Get All users contacts
// @access  Private 

router.get('/', (req, res) => {
    res.send('Get all contacts')
})



//  @route  POST api/contacts
// @desc    Update contact
// @access  Private 

router.put('/:id', (req, res) => {
    res.send('Update contact')
})

//  @route  Delete api/contacts/:id
// @desc    delete new contact
// @access  Private 

router.delete('/', (req, res) => {
    res.send('delete contact')
})




module.exports = router;