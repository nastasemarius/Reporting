
import mongoose from 'mongoose';
import ObjectID from 'bson';

const MONGODB_URI = env.process.MONGODB_URI || 'mongodb://heroku_mhjvnhqs:8gl7pki4bn61abu53amc7jijkg@ds151753.mlab.com:51753/heroku_mhjvnhqs';

class Database {
    constructor() {
       initializeDatabase();
    }

    initializeDatabase(){
        this.instance = mongoose.connect(MONGODB_URI);
        this.instance.on('error', console.error.bind(console, 'connection error:'));
        this.instance.once('open', function () {
            console.log('Connected to the database');
        });
    }
}

export default new Database();