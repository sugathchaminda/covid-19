import responseHelper from '../../helpers/responseHelper';
import Router from '../../core/Router';
import responseMessages from '../../constants/response';
import { DailyStatModel } from '../../models';

class DailyStatController extends Router {
    get routes() {
        return [
            ['GET', '/daily/stats', 'dailyStats'],
        ];
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     */
    async dailyStats(req, res) {
        const { CODES: { SUCCESS } } = responseMessages;

        try {
            const dailyStats = await DailyStatModel.find().select('-_id recovered new_cases new_deaths');

            return responseHelper.response(res, 200, { dailyStats }, true, SUCCESS, null);
        } catch (error) {
            responseHelper.error(res, error);
        }
    }
}

module.exports = DailyStatController;
