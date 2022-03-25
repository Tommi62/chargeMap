'use strict';
import express from 'express';
import stationRoute from './routes/stationRoute';
import authRoute from './routes/authRoute';
import passport from './utils/pass';
import db from './utils/db';
//import session from 'express-session';

const app = express();
const port = process.env.PORT || 3000;

/*
app.use(session({
  secret: 'jscdjkbdscbsdjcsdjkHHGJG7867HGFGUIOUOdeoöjV',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
*/

app.use(passport.initialize());
//app.use(passport.session());

/*
const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(403).json({message: 'Hell no!'});
  }
};
*/

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello chargemap');
});

//passport.authenticate('jwt', {session: false});

app.use('/auth', authRoute)
app.use('/station', stationRoute);

db.on('connected', () => {
  app.listen(port, () => { console.log(`app listen on port ${port}`); });
});

