const firstName = 'Ilya';
const lastName = 'Fedilala';
const age = 30;

let str;

str = 'Hello my name is' + firstName + ' ' + lastName;

//ES5

str = '<ul>' +
    '<li>firstName' + firstName + '</li>' +
    '<li>lastName' + lastName + '</li>' +
    '<li>Age:' + age + '</li>'
'</ul>';

//console.log(str);

// ES6

str = `

<ul>

<li>First name: ${firstName}</li>
<li>last name: ${lastName}</li>
<li>Age: ${age}</li>
<li>Math.random: ${Math.random()}</li>
<li>5 + 5 = ${5 + 5}</li>
</ul>
`;

document.body.innerHTML = str;