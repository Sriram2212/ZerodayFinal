const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS configuration for production
app.use(cors({
 origin: process.env.NODE_ENV === 'production'
    ? [
        'https://zero-dayfrontend-gswdxxii3-sriram2212s-projects.vercel.app',
        'https://zero-dayfrontend-94hnp0yc1-sriram2212s-projects.vercel.app',
        'https://zeroday-final-6t25qjbxb-sriram2212s-projects.vercel.app'
      ]
    : ['http://localhost:3000'],
  credentials: true
}));


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/upload', express.static(path.join(__dirname, 'upload')));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/announcements', require('./routes/announcementRoutes'));
app.use('/api/lostfound', require('./routes/lostFoundRoutes'));
app.use('/api/timetable', require('./routes/timetableRoutes'));
app.use('/api/complaints', require('./routes/complaintRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));
app.use('/api/sessions', require('./routes/sessionRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/techfeed', require('./routes/techPostRoutes'));
app.use('/api/polls', require('./routes/pollRoutes'));

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: 'ZeroDay API is running!',
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/health', (req, res) => {
    res.json({ 
        message: 'API Health Check',
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use(errorHandler);

// Handle 404
app.use('*', (req, res) => {
    res.status(404).json({ 
        message: 'Route not found',
        path: req.originalUrl
    });
});

const PORT = process.env.PORT || 5000;

// For Vercel deployment - only listen if not in serverless environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;

