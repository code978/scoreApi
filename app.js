const express = require('express')
const app = express()
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
const connectdb = require('./config/database');
const port = process.env.PORT || 3000;

app.use(express.json())
connectdb()


app.use('/',require('./routes/index'))

app.get('/highest_Score',async (req,res)=>{

    const data={
        'Round_1 ':'10',
        'Round_2 ':'20',
        'Round_3 ':'30',
    }

    res.json(data);

})


app.listen(port,(req,res)=>{
    console.log(`port is running on locahost: ${port}`)
})