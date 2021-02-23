const express = require('express');
const cookiesessions = require('cookie-session');
 require('./models/users.js');
const passport = require('passport');
const bodyParser = require('body-parser')
const passportConfig = require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');
const billingroutes = require('./routes/billingRoutes')
const keys = require('./config/keys.js');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());
app.use(
    cookiesessions({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURIKey,{useNewUrlParser:true,
    useUnifiedTopology:true});

// 841497481343-lcofcmbdrl0acmr02m3lna9380ne4bl9.apps.googleusercontent.com
// -jU9G6Kw7VYx-J9A_NBOPSu9
//DB user Matthew password  yQeDeVMAUwGo6FPF
authRoutes(app);
billingroutes(app);

const Port = process.env.Port || 5000;

app.listen(Port);
