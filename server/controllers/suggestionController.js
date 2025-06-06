// controllers/suggestionController.js

const Suggestion = require('../models/Suggestion');

// 📥 Get all suggestions (optionally paginated)
exports.getAllSuggestions = async (req, res) => {
  const userId = req.user._id;
  const suggestions = await Suggestion.find({ user: userId }).sort({ createdAt: -1 });
  res.json({ success: true, suggestions });
};

// ⭐ Bookmark toggle
exports.toggleBookmark = async (req, res) => {
  const { id } = req.params;
  const suggestion = await Suggestion.findById(id);

  if (!suggestion || suggestion.user.toString() !== req.user._id.toString()) {
    return res.status(404).json({ success: false, message: 'Suggestion not found or unauthorized' });
  }

  suggestion.bookmarked = !suggestion.bookmarked;
  await suggestion.save();

  res.json({ success: true, bookmarked: suggestion.bookmarked });
};

// ⚖️ Compare selected suggestions
exports.compareSuggestions = async (req, res) => {
  const { ids } = req.body; // array of suggestion IDs
  const userId = req.user._id;

  const suggestions = await Suggestion.find({
    _id: { $in: ids },
    user: userId
  });

  res.json({ success: true, suggestions });
};
