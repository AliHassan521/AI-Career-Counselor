require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const careerRoutes = require('./routes/career');
const resumeRoutes = require('./routes/resume');
const suggestionRoutes = require('./routes/suggestion');
const errorHandler = require('./middlewares/ErrorHandler');

const app = express();
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/career', careerRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/suggestions', suggestionRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);


