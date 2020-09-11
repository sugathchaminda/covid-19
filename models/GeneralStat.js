import mongoose from 'mongoose';

const { Schema } = mongoose;

const GeneralStatSchema = new Schema({
    recovered: {
        type: Number,
        default: 0,
    },
    active_cases: {
        type: Number,
        default: 0,
    },
    total_cases: {
        type: Number,
        default: 0,
    },
    total_deaths: {
        type: Number,
        default: 0,
    },
    suspected: {
        type: Number,
        default: 0,
    },
    death_rate: {
        type: String,
        default: null,
    },
    recovery_rate: {
        type: String,
        default: null,
    },
}, { collection: 'general_stat', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('GeneralStat', GeneralStatSchema);
