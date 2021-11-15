const express = require('express')
const app = express()
const PORT = process.env.PORT || "5000"

// Country Route
const countryRoute = require('./routes/Countries')
app.use('/countries', countryRoute)


// 404
app.get("*", (req, res)=>{
    res.json({"message": "👨‍🦯 Nothing here!"})
})
app.listen(PORT, console.log("🔥 LIVE 🔥"))