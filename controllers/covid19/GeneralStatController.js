import responseHelper from '../../helpers/responseHelper';
import Router from '../../core/Router';
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
            const generalStats = await GeneralStatModel.find().select('-_id recovered active_cases total_cases total_deaths suspected death_rate recovery_rate');

            return responseHelper.response(res, 200, { generalStats }, true, SUCCESS, null);
        } catch (error) {
            responseHelper.error(res, error);
        }
    }
}

module.exports = GeneralStatController;
