const pdfParse = require('pdf-parse');
const Resume = require('../models/Resume');

exports.uploadResume = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Parse PDF buffer to extract text
    const data = await pdfParse(req.file.buffer);
    const extractedText = data.text;

    // Save resume info to DB
    const resume = new Resume({
      user: req.user._id,
      originalName: req.file.originalname,
      extractedText,
    });

    await resume.save();

    // Build a prompt for career suggestion API here (optional)
    // For now, just return extracted text to frontend
    res.status(200).json({ success: true, extractedText });
  } catch (error) {
    next(error);
  }
};
