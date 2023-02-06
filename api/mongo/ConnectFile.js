const { MongoClient } = require("mongodb")

const conUrl = 'mongodb+srv://JohnBarryAtim:Password@cluster0.ha37sox.mongodb.net/test';

const client = new MongoClient(conUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((err) =>{
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log("Successfully connected to MongoDB");
});

module.exports = client;