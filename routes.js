import {
    GeneralStatController,
    ProvinceStatController,
    DailyStatController,
} from './controllers';

export default app => {
    app.use(new GeneralStatController().router);
    app.use(new ProvinceStatController().router);
    app.use(new DailyStatController().router);
};
