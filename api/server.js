const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session')

const authRouter = require('../auth/restricted_midware');
const userRouter = require('../users/user_router');
const instructorRouter = require('../instructors/instructor_router');


const server = express();

const sessionConfiguration = {
    name: 'monster', // deafults to sid for the cookie name
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe!',
    cookie: {
      httpOnly: true, // true means js cant access the cookie
      maxAge: 1000 * 60 * 10, //expires after 10 mins
      secure: process.env.SECURE_COOKIES || false, // true means send cookies over https only
    },
    resave: false, //re save the seesion information even if there are no changes
    saveUninitialized: true, // read about the GDPR compliance
  }

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfiguration))

server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/auth', authRouter);
server.use('/api/auth/users/classes', userRouter);
server.use('/api/auth/instructor/classes', instructorRouter);

module.exports = server;