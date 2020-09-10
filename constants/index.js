import { constants } from 'safe-comm-common';

const constantsMobile = {
    PASSWORD_VALIDATION_REGEX: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=.*?[^\sa-zA-Z0-9]).{8,}/,
    AUTH_TOKEN_EXPIRE_TIME: '24h', // login expire time in hours

    /** PIN expire time */
    PIN_EXPIRE_TIME: 1, // in mins
    SECRETS: {
        JWT_LOGIN_AUTH: 'eabe8511-b1ec-4ab1-982f-0c986ba4d6a5',
        LOGIN_TOKEN_EXPIRE_TIME: '24h',
    },
    SENDGRID_TEMPLATES: {
        APP_DISABLED: 'd-92bb7de16fc54ede83df90107ca06b1b',
        APP_DISABLED_LOG_TIME: 'd-9edc2403b8ac4a7cb50afd433b008b98',
    },
    SETTINGS: {
        NOTIFY_USERS: 'notify_users',
    },
    APP_DISABLE_NOTIFY_TIME: 20,
};

module.exports = Object.freeze({ ...constants, ...constantsMobile });
