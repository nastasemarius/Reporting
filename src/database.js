
import mongoose from 'mongoose';

class Database {
    constructor() {
        this.initializeDatabase();
    }

    initializeDatabase() {
        const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://heroku_mhjvnhqs:8gl7pki4bn61abu53amc7jijkg@ds151753.mlab.com:51753/heroku_mhjvnhqs';
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

        mongoose.connection.once('open', () => {
            console.log('Connected to the database');
        });
    }

}

export default new Database();