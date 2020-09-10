import mongoose from 'mongoose';
import config from 'config';

/**
 * MongoDb connector
 */
module.exports = {
    init() {
        mongoose.connect(
            `mongodb://${config.database.mongodb.host}:${config.database.mongodb.port}/${config.database.mongodb.name}`,
            { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
            error => {
                if (error) {
                    console.log('Error on connecting to MongoDB');
                } else {
                    console.log('**** Connected to MongoDB ****');
                }
            },
        );
    },
};
