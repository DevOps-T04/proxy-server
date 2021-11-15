require('dotenv').config()
const express = require('express')
const router = express.Router()
const con = require('../config/connection')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


// LIST ALL ROUTES
router.get('/', (req, res)=>{
    // DUMPING DATA
    let q = "SELECT * FROM history"
    con.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
})

// LIST SPECIFIC Country throuhg a different API
router.get("/:c", async (req, res)=>{ //PROXY SERVER
    const API_KEY = process.env.API_KEY || "NOTHING"
    const {c} = req.params
    const URI = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${c}&aqi=no`
    
    const result = await fetch(URI)
    const json = await result.json()
    // retrieving specific elements
    let resToShow = [json.location.name, json.location.country, json.location.localtime]
    res.send(resToShow)
})


module.exports = router