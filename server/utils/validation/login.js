const Validator = require('validator');
const isEmpty = require('./isEmpty');


module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email недействителен';
    }


    if (Validator.isEmpty(data.email)) {
        errors.email = 'Поле электронной почты обязательно для заполнения';
    }


    if (Validator.isEmpty(data.password)) {
        errors.password = 'Поле пароля обязательно для заполнения';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
