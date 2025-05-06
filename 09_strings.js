const name = "nikhil"
const repoCount = 5

// console.log(name + repoCount + " Value");
// this method is very outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('the-irreplaceable-void')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);
// if we give -ve values to the substring method then it will ignore it and starts from 0

const anotherString = gameName.slice(-17, 9)
console.log(anotherString);
// in slice we can also give -ve index value

const newStringOne = "  indominance   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https//www.devoid.com/this%20is%20my%20id"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
// this method split the string based on the given seperator