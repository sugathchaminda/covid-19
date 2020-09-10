import { Joi, Segments } from 'celebrate';

const phoneValidateService = Joi.string().regex(/^[0-9]{10}$/).required().label('Phone');

module.exports = {
    login: {
        [Segments.BODY]: {
            _id: Joi.string().optional().label('Id'),
            phone: phoneValidateService,
            first_name: Joi.string().optional().label('First Name'),
            last_name: Joi.string().optional().label('Last Name'),
            email: Joi.string().optional().label('Email'),
            verification_hash: Joi.string().optional().label('Verification Hash'),
            avatar: Joi.string().optional().label('Avatar'),
            token: Joi.string().optional().label('Token'),
            role: Joi.string().optional().label('Role'),
        },
    },
};
