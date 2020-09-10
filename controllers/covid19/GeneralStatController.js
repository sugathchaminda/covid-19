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
import { GeneralStatModel } from '../../models';

class GeneralStatController extends Router {
    get routes() {
        return [
            ['GET', '/general/stats', 'generalStats'],
        ];
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     */
    async generalStats(req, res) {
        const { CODES: { SUCCESS } } = responseMessages;

        try {
            const generalStats = await GeneralStatModel.find().select('-_id recovered confirmed active_cases total_cases total_deaths');

            return responseHelper.response(res, 200, { generalStats }, true, SUCCESS, null);
        } catch (error) {
            responseHelper.error(res, error);
        }
    }
}

module.exports = GeneralStatController;
