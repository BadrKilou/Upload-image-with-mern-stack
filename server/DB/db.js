const mongoose = require('mongoose');

const Database = async () => {
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/multer', {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})   
    console.log('Connected Successfully to MongoDB')
    }
    catch(err){
        console.log(err.message)
    }

}

module.exports = Database;