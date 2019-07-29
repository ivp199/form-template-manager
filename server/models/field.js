import mongoose from 'mongoose';

export const fieldSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  fieldName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  displayName: {
    type: String,
    required: true,
    trim: true,
  },
  sequenceId: {
    type: Number,
    required: true,
  },
  type: {
    text: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    hasOptions: {
      type: Boolean
    },
  },
  options: [
    {
      name: {
        type: String,
      },
      value: {
        type: String,
      } 
    }
  ]
});

export default mongoose.model('Field', fieldSchema);