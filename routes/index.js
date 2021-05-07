const expres = require('express');
const routes = expres.Router();

routes.get('/',(req,res)=>{
    const data={
        'Round_1 ':'10',
        'Round_2 ':'20',
        'Round_3 ':'30',
    }

    res.json(data);

})

module.exports = routes;