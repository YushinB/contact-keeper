const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the contact-keeper API...' })
);
const PORT = process.env.PORT || 5000;

// define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
