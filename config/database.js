const mongoose = require('mongoose')


const username = 'Score_api';
const password = 'Score_api';

const connectdb = async () =>{
    const db_url = `mongodb+srv://Score_api:Score_api@cluster0.ooyrk.mongodb.net/Score_api?retryWrites=true&w=majority`
    try{
        await mongoose.connect(db_url, {useNewUrlParser: true,useUnifiedTopology:true});
        console.log('databse is sucessfully connected.')
    }catch(err){
        console.log(err.message);
    }
}

module.exports = connectdb