const express = require('express');
const router = express.Router();
const { uploadResume } = require('../controllers/resumeController');
const upload = require('../middlewares/uploadMiddleware');
const { protect } = require('../middlewares/authMiddleware'); // ensure user is logged in

router.post('/upload', protect, upload.single('resume'), uploadResume);

module.exports = router;
