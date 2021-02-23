const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const user = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    user.findById(id).then(user => {
        done(null, user);
    })
});
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecrect,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile)
  user.findOne({ googleId: profile.id })
  .then(existingUser=>
    {
        
         if (existingUser) {
                done(null, existingUser)
            }
            else {
         new user({ googleId: profile.id }).save()
         .then(user=>done(null,user));
         
            } 
    })
        
          
   



}))