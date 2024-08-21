
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook';

passport.use(new FacebookStrategy({
    clientID: '516009214310542',
    clientSecret: 'a3425e8a85d27dacbf1f094aac7e35e8',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    console.log('face',profile)
    return cb(null, profile);
    // });
  }
));