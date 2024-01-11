const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../public/homepage.html'));
    res.send('Homepage');
});

router.get('/about', (req, res) => {
    //res.sendFile(path.join(__dirname, '../public/aboutUsPage.html'));
    res.send('About Us');
});

module.exports = router;