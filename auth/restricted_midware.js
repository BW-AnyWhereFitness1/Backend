const jwt = require('jsonwebtoken');
const config = require('../api/config');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {

    jwt.verify(token, config.jwtSecret, (error, decodedToken) => {
      if (error) {
        // the token is invalid
        res.status(401).json({ message: err.message });
      } else {
        req.jwt = decodedToken;

        next();
      }
    });
  } else {
    res.status(401).json({ you: "shall not pass!!" });
  }
};