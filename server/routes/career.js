const express = require('express');
const { getCareerSuggestions, getSuggestionsHistory } = require('../controllers/careerController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, getCareerSuggestions);
router.get('/history', protect, getSuggestionsHistory);

module.exports = router;
