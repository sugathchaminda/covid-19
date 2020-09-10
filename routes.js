import {
    UserAuthController,
    GeneralStatController,
    ProvinceStatController,
} from './controllers';

export default app => {
    app.use(new UserAuthController().router);
    app.use(new GeneralStatController().router);
    app.use(new ProvinceStatController().router);
};
