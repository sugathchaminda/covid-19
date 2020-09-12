import responseHelper from '../helpers/responseHelper';
import responseMessages from '../constants/response';

const Authorization = () => async (req, res, next) => {
    const { MESSAGES: { UNAUTHORIZED, NO_CACHED_USERS_FOUND } } = responseMessages;

    const { id } = req.user;

    req.redis.hgetall(`covid_19_user_${id}`, async (error, cachedUser) => {
        if (error) {
            res.boom.badImplementation('Can not find cached user data');
        } else if (cachedUser) {
            const { token } = cachedUser;
            const userRequestToken = req.headers.authorization.split(' ');
            if (userRequestToken[1] !== token) {
                return responseHelper.response(res, 401, [], false, UNAUTHORIZED);
            }
            next();
        } else {
            return responseHelper.response(res, 401, [], false, NO_CACHED_USERS_FOUND);
        }
    });
};

module.exports = Authorization;
