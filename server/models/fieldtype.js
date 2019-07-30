import mongoose from 'mongoose';

const fieldTypeSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  text: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
  },
  hasOptions: {
    type: Boolean,
  }
});

export default mongoose.model('FieldType', fieldTypeSchema);