import mongoose from 'mongoose';

import constants from '../constants';

const { Schema } = mongoose;

const CustomerSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    phone_tmp: {
        type: String,
    },
    verification_hash: {
        type: String,
    },
    verification_hash_created_at: {
        type: Date,
        default: null,
    },
    zip_code: {
        type: String,
    },
    is_receive_offer: {
        type: Boolean,
        default: true,
    },
    distance_preference: {
        type: Number,
        default: 0,
    },
    special_request: {
        type: String,
    },
    favorite_restaurant: {
        type: String,
    },
    available_to_dine_on: { // which day of week. Monday = 1
        type: Array,
        default: [],
    },
    is_setup_preferences: {
        type: Boolean,
        default: false,
    },
    re_calculation_needed: {
        type: Boolean,
        default: false,
    },
    re_calculation_in_progress: {
        type: Boolean,
        default: false,
    },
    is_logged_first_time: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'customer' });


export default mongoose.model('Customer', CustomerSchema);
