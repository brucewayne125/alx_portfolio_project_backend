// Setting up the express server amd importing the routes
const express = require('express');
const app = express();

const authroutes = require('./routes/authroutes');
const userroutes = require('./routes/userroutes');
const resourceroutes = require('./routes/resoourceroutes');

app.use(express.json());

app.use('/api/auth', authroutes);
app.use('/api/user', userroutes);
app.use('/api/resource', resourceroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => CONSOLE.LOG('Server running on port${PORT}');
