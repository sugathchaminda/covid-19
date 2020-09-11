import mongoose from 'mongoose';

const { Schema } = mongoose;

const DailyStatSchema = new Schema({
    recovered: {
        type: Number,
        default: 0,
    },
    new_cases: {
        type: Number,
        default: 0,
    },
    new_deaths: {
        type: Number,
        default: 0,
    },
}, { collection: 'daily_stat', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('DailyStat', DailyStatSchema);
