const mongoose = require('mongoose');
mongoose.Promise = Promise;

const FactFindSchema = new mongoose.Schema({
  metadata: { type: Object, required: false },
  fact_find_id: { type: String, required: true },
  fact_find: { type: Object, required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('FactFindSchema', FactFindSchema);
