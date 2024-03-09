// let js = 'kln';

// 20 + 10 + 15;
// console.log(40);

// let firstName = 'kln';  //camel case - 
// let lastName = 'lokesh';
// console.log(firstName);
// console.log(lastName);

// let _age = 76;
// console.log(_age)

// let $fatherName = 'ramesh';
// console.log($fatherName)

// let year = 1936;
// console.log(year);
// console.log(typeof year);

// year = 'nineteen thirty six';
// console.log(year);
// console.log(typeof year);

// year = true;
// console.log(year);
// console.log(typeof year);

// let salary;
// console.log(salary);
// console.log(typeof salary);

// salary = null;
// console.log(salary);
// console.log(typeof salary);

// let age = 30;
// console.log(age);
// age = 31;
// console.log(age);

// const yearOfBirth = 1990;
// console.log(yearOfBirth);
// // yearOfBirth = 1991; is not possible since it is constant

// var teacherName = 'kln';
// console.log(teacherName);
// teacherName = 31;
// console.log(teacherName); 

const now = 2024;
const ageKln = now - 2004;
const ageRoshan = now - 2006;

console.log(ageKln, ageRoshan);
console.log(ageKln + ageRoshan);
console.log(ageKln * ageRoshan); // +, *, -, **, /

const isAgeFull = ageKln >= ageRoshan;

console.log(isAgeFull);

console.log(!isAgeFull);

// console.log(ageKln++); error couldn't change const variable

let x = 10;
console.log(x++);
console.log(x);