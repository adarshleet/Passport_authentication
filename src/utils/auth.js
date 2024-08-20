
// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth2').Strategy
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';



passport.use(new GoogleStrategy({
    clientID: '70056155461-hiq3rh4jsitss8j0qmvsih680t6sunhf.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  }, async (token, tokenSecret, profile, done) => {
    try {
    //   let user = await User.findOne({ where: { googleId: profile.id } });
    //   if (!user) {
    //     user = await User.create({
    //       googleId: profile.id,
    //       email: profile.emails[0].value,
    //     });
    //   }
    console.log("proffff",profile)
      return done(null, profile);
    } catch (err) {
      return done(err);
    }
  }));


  passport.serializeUser(function(user,done){
    done(null,user)
  })

  passport.deserializeUser(function(user,done){
    done(null,user)
  })


  