// routes/suggestion.js

const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {
  getAllSuggestions,
  toggleBookmark,
  compareSuggestions
} = require('../controllers/suggestionController');

router.get('/', protect, getAllSuggestions);
router.patch('/bookmark/:id', protect, toggleBookmark);
router.post('/compare', protect, compareSuggestions);

module.exports = router;
