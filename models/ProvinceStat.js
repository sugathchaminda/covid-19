import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProvinceStatSchema = new Schema({
    name: {
        type: String,
        default: null,
    },
    stat: {
        recovered: {
            type: Number,
            default: 0,
        },
        confirmed: {
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
    },
}, { collection: 'province_stat', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('ProvinceStat', ProvinceStatSchema);
