import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  technologies: [{
    type: String,
    trim: true
  }],
  imageUrl: {
    type: String,
    trim: true
  },
  projectUrl: {
    type: String,
    trim: true
  },
  githubUrl: {
    type: String,
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
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;

