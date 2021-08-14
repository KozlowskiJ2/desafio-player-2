const mongoose = require('mongoose');
const conectaDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        return true;
    }
    catch (error) {
        return error;
    }
}

module.exports = conectaDB;