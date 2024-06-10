const express = require('express');
const bodyParser = require('body-parser');
const { generateToken } = require('./jwtUtils');
const validateToken = require('./validateToken');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());







const user = {
  id: 1,
  username: 'johnDoe',
  password: 'password',
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = generateToken(user);

    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid username or password',
    });
  }
});





app.get('/protected', validateToken, (req, res) => {
    res.json({
      success: true,
      message: 'Welcome to the protected route!',
      user: req.user,
    });
  });




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});