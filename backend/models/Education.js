import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: [true, 'Institution name is required'],
    trim: true
  },
  degree: {
    type: String,
    required: [true, 'Degree/Qualification is required'],
    trim: true
  },
  fieldOfStudy: {
    type: String,
    required: [true, 'Field of study is required'],
    trim: true
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    trim: true
  },
  grade: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Education = mongoose.model('Education', educationSchema);

export default Education;

