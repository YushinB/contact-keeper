const express = require('express');
const connectDB = require('./config/db');
const app = express();
// connect database
connectDB();

// init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the contact-keeper API...' })
);
const PORT = process.env.PORT || 5000;

// define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
