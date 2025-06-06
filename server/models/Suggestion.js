const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    interests: { type: String, required: true },
    skills: { type: String, required: true },
    personality: { type: String, required: true },
    result: { type: String, required: true }, // OpenAI suggestion

    // ✅ NEW: Bookmark toggle
    bookmarked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Suggestion', suggestionSchema);
