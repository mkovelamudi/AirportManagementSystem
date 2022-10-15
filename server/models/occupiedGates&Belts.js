const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const occupiedGatesBelt = new Schema({
    'terminal': {
        type: String,
        required: true
    },
    'gate' : {
        type: String,
        required: true
    },
    'belt' : {
        type: String,
        required: true
    },
    'startTime' : {
        type: Date,
        required: true
    },
    'endTime' : {
        type: Date,
        required: true
    }
}, { timestamps: true })

const occGates = mongoose.model('occupiedGates&Belt', occupiedGatesBelt);

module.exports = occGates;