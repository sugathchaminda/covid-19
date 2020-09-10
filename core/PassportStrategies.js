import passport from 'passport';
import passportJtw from 'passport-jwt';
import constants from '../constants';

module.exports = {
    init() {
        const { Strategy: JwtStrategy, ExtractJwt: ExtractJWT } = passportJtw;
        const { SECRETS: { JWT_LOGIN_AUTH: jwtLoginAuthSecret } } = constants;

        // JWT strategy
        passport.use(new JwtStrategy({
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtLoginAuthSecret,
        }, (jwtPayload, done) => done(null, jwtPayload)));

        // Local strategy
        passport.serializeUser((user, done) => {
            done(null, user.email);
        });
    },
};
