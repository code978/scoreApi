const expres = require('express');
const routes = expres.Router();

routes.get('/',(req,res)=>{

    const MaxScoreData = {
        Person:{
            highScore:{
                'Round3':'30'
            }
        }
    }
    res.json(MaxScoreData);

})

module.exports = routes;