import config from 'config';
import path from 'path';
import seeder from 'mongoose-seed';

import generalStatData from './generalStat.json';
import provinceStatData from './provinceStat.json';
import dailyStatData from './dailyStat.json';


const dbPath = `mongodb://${config.database.mongodb.host}:${config.database.mongodb.port}/${config.database.mongodb.name}`;

seeder.connect(dbPath, { useNewUrlParser: true, useCreateIndex: true }, () => {
    seeder.loadModels([
        path.join(__dirname, '../models/GeneralStat'),
        path.join(__dirname, '../models/ProvinceStat'),
        path.join(__dirname, '../models/DailyStat'),
    ]);

    seeder.clearModels(['GeneralStat'], () => {
        try {
            seeder.populateModels(generalStatData, () => {
                console.log('Seeded successfully');
            });
        } catch (ex) {
            console.error(`Error occurred on ${ex.seed}`, ex.error);
            process.exit();
        }
    });

    seeder.clearModels(['ProvinceStat'], () => {
        try {
            seeder.populateModels(provinceStatData, () => {
                console.log('Seeded successfully');
            });
        } catch (ex) {
            console.error(`Error occurred on ${ex.seed}`, ex.error);
            process.exit();
        }
    });
    seeder.clearModels(['DailyStat'], () => {
        try {
            seeder.populateModels(dailyStatData, () => {
                console.log('Seeded successfully');

                process.exit();
            });
        } catch (ex) {
            console.error(`Error occurred on ${ex.seed}`, ex.error);
            process.exit();
        }
    });
});
