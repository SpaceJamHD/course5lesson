const firstName = 'Ilya';
const lastName = 'Fedilala';
const age = 30;

let str;

str = 'Hello my name is' + firstName + ' ' lastName;

str = '<ul>' +
    '<li>firstName' + firstName + '</li>' +
    '<li>lastName' + lastName + '</li>' +
    '<li>Age:' + age + '</li>'
'<ul>';

console.log(str);