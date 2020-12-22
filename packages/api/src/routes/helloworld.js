const router = require('express').Router()
const path = require('path');

router.get('/', (req, res) => {
    res.send("Hello World");
})

module.exports = router