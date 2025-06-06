const axios = require('axios');
const Suggestion = require('../models/Suggestion');

exports.getCareerSuggestions = async (req, res, next) => {
  try {
    const { interests, skills, personality } = req.body;

    const prompt = `Suggest 3 suitable career paths based on the following:
    Interests: ${interests}
    Skills: ${skills}
    Personality: ${personality}
    Provide concise reasons for each option.`;

    // Call OpenRouter API
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mistral-7b-instruct:free',
        messages: [
          { role: 'user', content: prompt }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000', // or your frontend URL
          'X-Title': 'AI Career Counselor'
        }
      }
    );

    const result = response.data.choices[0].message.content;

    // Save to DB
    const suggestion = new Suggestion({
      user: req.user._id,
      interests,
      skills,
      personality,
      result,
    });
    await suggestion.save();

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Something went wrong while generating suggestions.' });
  }
};

exports.getSuggestionsHistory = async (req, res, next) => {
  try {
    const suggestions = await Suggestion.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(suggestions);
  } catch (error) {
    next(error);
  }
};
