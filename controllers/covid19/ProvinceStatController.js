import responseHelper from '../../helpers/responseHelper';
import Router from '../../core/Router';
import responseMessages from '../../constants/response';
import { ProvinceStatModel } from '../../models';

class ProvinceStatController extends Router {
    get routes() {
        return [
            ['GET', '/province/stats', 'provinceStats'],
        ];
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     */
    async provinceStats(req, res) {
        const { CODES: { SUCCESS } } = responseMessages;

        try {
            const provinceStats = await ProvinceStatModel.find().select('-_id name stat ');

            return responseHelper.response(res, 200, { provinceStats }, true, SUCCESS, null);
        } catch (error) {
            responseHelper.error(res, error);
        }
    }
}

module.exports = ProvinceStatController;
