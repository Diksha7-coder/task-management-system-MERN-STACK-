const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes Imports
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');
const employeeRoute = require('./routes/employee');
const projectRoute = require('./routes/project');
const taskRoute = require('./routes/task');
const timesheetRoute = require('./routes/timesheet');
const attendanceRoute = require('./routes/attendance');

const app = express();

connectDB();

// CORS Configuration
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://task-management-system-frontend-production.up.railway.app"
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running successfully');
});

// API's
app.use('/api', authRoute);
app.use('/api', dashboardRoute);
app.use('/api', employeeRoute);
app.use('/api', projectRoute);
app.use('/api', taskRoute);
app.use('/api', timesheetRoute);
app.use('/api', attendanceRoute);

// Server Listen
const PORT = process.env.PORT || 8000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});