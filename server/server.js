const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/survey-lucky-draw', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define MongoDB schema and models for survey responses and lucky draw results
const surveyResponseSchema = new mongoose.Schema({
  name: String,
  feedback: String,
});

const luckyDrawResultSchema = new mongoose.Schema({
  result: String,
});

const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema);
const LuckyDrawResult = mongoose.model('LuckyDrawResult', luckyDrawResultSchema);

// Create API routes for saving survey responses and lucky draw results
app.post('/api/survey-response', async (req, res) => {
  try {
    const surveyResponse = new SurveyResponse(req.body);
    await surveyResponse.save();
    res.status(201).json({ message: 'Survey response saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the survey response.' });
  }
});

app.post('/api/lucky-draw-result', async (req, res) => {
  try {
    const luckyDrawResult = new LuckyDrawResult(req.body);
    await luckyDrawResult.save();
    res.status(201).json({ message: 'Lucky draw result saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the lucky draw result.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
