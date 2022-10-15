const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const terminalGateBelt = new Schema({
    terminal : {
        type: String,
        required: true
    },
    gate : [{
        type: String,
        required: false
    }],
    belt : [{
        type: String
    }]
    
}, { timestamps: true })

const terminalGate = mongoose.model('terminalGate',terminalGateBelt);

module.exports = terminalGate;