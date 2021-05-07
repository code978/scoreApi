const express = require('express')
const app = express()
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
const connectdb = require('./config/database');
const port = process.env.PORT || 3000;

app.use(express.json())
connectdb()


app.use('/',require('./routes/index'))
app.use('/highscore',require('./routes/highestScore'))

app.listen(port,(req,res)=>{
    console.log(`port is running on locahost: ${port}`)
})