const router = require('express').Router()
const path = require('path');
const axios = require("axios");

router.get('/', async (req, res) => {
    const getQuoteBody = await axios.get("https://api.kanye.rest/");
    if(getQuoteBody.status === 200){
        const quote = getQuoteBody.data.quote;
        console.log(quote)
        res.send(quote)
    } else{
        res.send(null);
    }
})

module.exports = router