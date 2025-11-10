import Education from '../models/Education.js';

// @desc    Get all education records
// @route   GET /api/education
// @access  Public
export const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single education record
// @route   GET /api/education/:id
// @access  Public
export const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (education) {
      res.json(education);
    } else {
      res.status(404).json({ message: 'Education record not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new education record
// @route   POST /api/education
// @access  Private/Admin
export const createEducation = async (req, res) => {
  try {
    const { institution, degree, fieldOfStudy, startDate, endDate, current, description, grade } = req.body;

    const education = await Education.create({
      institution,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
      current,
      description,
      grade
    });

    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update education record
// @route   PUT /api/education/:id
// @access  Private/Admin
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (education) {
      education.institution = req.body.institution || education.institution;
      education.degree = req.body.degree || education.degree;
      education.fieldOfStudy = req.body.fieldOfStudy || education.fieldOfStudy;
      education.startDate = req.body.startDate || education.startDate;
      education.endDate = req.body.endDate || education.endDate;
      education.current = req.body.current !== undefined ? req.body.current : education.current;
      education.description = req.body.description || education.description;
      education.grade = req.body.grade || education.grade;

      const updatedEducation = await education.save();
      res.json(updatedEducation);
    } else {
      res.status(404).json({ message: 'Education record not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete education record
// @route   DELETE /api/education/:id
// @access  Private/Admin
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (education) {
      await education.deleteOne();
      res.json({ message: 'Education record removed' });
    } else {
      res.status(404).json({ message: 'Education record not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

