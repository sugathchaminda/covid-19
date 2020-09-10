import { celebrate, errors } from 'celebrate';
import passport from 'passport';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import responseHelper from '../../helpers/responseHelper';
import validations from '../../validations';
import Router from '../../core/Router';
import util from '../../helpers/util';
import constants from '../../constants';
import responseMessages from '../../constants/response';
import { ApplicationModel, IdCardModel } from '../../models';

class UserAuthController extends Router {
    get routes() {
        return [
            // ['POST', '/login', 'login', [celebrate(validations.user.login), errors()]],
            ['GET', '/logout', 'logout', [passport.authenticate('jwt', { session: false })]],
        ];
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     */
    // async login(req, res) {
    //     let { phone } = req.body;
    //     const {
    //         MESSAGES: {
    //             PHONE_NO_NOT_REGISTERED,
    //             ACCOUNT_DEACTIVATED,
    //             LOGIN_VERIFY_PIN_SUCCESS,
    //             LOGIN_SMS_MSG,
    //         },
    //     } = responseMessages;

    //     try {
    //         const { APP_STATUS: { APP_ACTIVATED } } = constants;
    //         phone = phone.replace(/[^\d]/g, '');

    //         const applicationUser = await ApplicationModel.findOne({ 'personal_info.phone': phone });

    //         const appUser = await IdCardModel.findOne({ phone });

    //         // validations
    //         if (applicationUser === null) {
    //             return responseHelper.response(res, 421, [], false, PHONE_NO_NOT_REGISTERED);
    //         }
    //         if (appUser.app_status !== APP_ACTIVATED) {
    //             return responseHelper.response(res, 422, [], false, ACCOUNT_DEACTIVATED);
    //         }

    //         // save verification hash on DB
    //         const { _id: userAppId } = applicationUser;
    //         const pin = util.generatePinCode();
    //         const verificationHash = bcrypt.hashSync(pin, 10);

    //         console.log('pin', pin);

    //         // send verification message to user
    //         const message = {
    //             message: `${LOGIN_SMS_MSG} ${pin}`,
    //             phone,
    //         };
    //         await Promise.all([
    //             ApplicationModel.updateOne(
    //                 { _id: userAppId },
    //                 { verification_hash: verificationHash, verification_hash_created_at: util.getPinExpireTIme() },
    //             ),
    //             messenger.send(message),
    //         ]);

    //         const returnData = {
    //             phone: {
    //                 phone,
    //             },
    //         };

    //         return responseHelper.response(
    //             res,
    //             200,
    //             returnData,
    //             true,
    //             LOGIN_VERIFY_PIN_SUCCESS,
    //         );
    //     } catch (error) {
    //         return responseHelper.error(res, error);
    //     }
    // }

    /**
     *
     * @param {*} req
     * @param {*} res
     */
    logout(req, res) {
        // const { MESSAGES: { USER_LOGGED_OUT, USER_LOGOUT_ERROR } } = responseMessages;

        // req.redis.del(`safe_com_user_${req.user.id}`, err => {
        //     if (err) {
        //         req.log.error(err);
        //         return res.boom.badImplementation(USER_LOGOUT_ERROR);
        //     }
        //     return responseHelper.response(res, 200, {}, true, USER_LOGGED_OUT);
        // });
    }
}

module.exports = UserAuthController;
