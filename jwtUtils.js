const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  const secretKey = 'myapp';
  const options = {
    expiresIn: '10s',
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
};

module.exports = {
  generateToken,
};