const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

//load environment variable
dotenv.config();

// connect to DB
connectDB();

// Api route files
const authRoutes = require('./src/routes/authRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const dashboardRoutes = require('./src/routes/dashboardRoutes');

const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api', dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
