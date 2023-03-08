const validator = require("validator");


const validateEmail = email => {
    return validator.isEmail(email);
}

console.log("First email check: ")
console.log(validateEmail("bielecki.biz@gmail.com"));

console.log("Second email check: ")
console.log(validateEmail("bielecki.bizgmail.com"));
