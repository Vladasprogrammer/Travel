const fs = require('fs');
const md5 = require('md5');
 
let users = [
    { name: 'Bebras', psw: md5('123') },
    { name: 'Briedis', psw: md5('123') },
    { name: 'Barsukas', psw: md5('123') }
];
 
users = JSON.stringify(users);
 
fs.writeFileSync('./users.json', users);
 
console.log('Vartotojai įrašyti.');
 