const Validator = require('validator');
const isEmpty = require('./isEmpty');


module.exports = function validateRegisterInput(data) {

    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.phone = !isEmpty(data.password) ? data.phone : '';


    if (!Validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = 'Имя должно быть от 2 до 30 символов';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Имя поля обязательно для заполнения';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Поле электронной почты обязательно для заполнения';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email недействителен';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Поле пароля обязательно для заполнения';
    }

    if (!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if (Validator.isEmpty(data.phone)) {
        errors.password = 'Телефон пароля обязательно для заполнения';
    }



    return {
        errors,
        isValid: isEmpty(errors)
    };
};

