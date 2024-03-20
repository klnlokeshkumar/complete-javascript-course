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

// const now = 2024;
// const ageKln = now - 2004;
// const ageRoshan = now - 2006;

// console.log(ageKln, ageRoshan);
// console.log(ageKln + ageRoshan);
// console.log(ageKln * ageRoshan); // +, *, -, **, /

// const isAgeFull = ageKln >= ageRoshan;

// console.log(isAgeFull);

// console.log(!isAgeFull);

// // console.log(ageKln++); error couldn't change const variable

// let x = 10;
// console.log(x++);
// console.log(x);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const marksMass = 78;
// const johnsMass = 92;
// const marksHeight = 169;
// const johsHeight = 195;

// const markBMI = marksMass/marksHeight;
// const johnBMI = johnsMass/johsHeight;

// const markHigherBMI = !(markBMI > 18);

// console.log(markHigherBMI);


// const firstName = 'KLN';
// const yearBirth = 1992;
// const currentYear = 2024;
// const profession = 'programmar';

// const statementString = firstName + ' is a ' + (currentYear - yearBirth) + ' year old ' + profession;
// console.log(statementString);

// const templateString = `${firstName} is a ${currentYear - yearBirth} year old ${profession}`;
// console.log(templateString);

// const multiLineString = "I am a good programmar \n\
// I love making useful websites";
// console.log(multiLineString);

// const multiLineTemplateString = `${firstName} is a ${currentYear - yearBirth} year old ${profession}
// and is a well trained market analyst`;
// console.log(multiLineTemplateString);


// const yearBirth = 1889;

// let century;
// if (yearBirth > 2000) {
//     century = 21;
// }
// else {
//     century = 20;
// }
// console.log(`he belongs to ${century} century.`);


// console.log('type conversion');
// const birthYear = '1991';
// const age = Number(birthYear) + 18;
// console.log(age);

// const ageMinus18 = birthYear - 18;
// console.log(ageMinus18);

// falsy values : 0, '', undefined, NaN, null, false;

// let falseValue = '';
// console.log(Boolean(falseValue));

// const age = Number(prompt("Enter your age"));
// if(age > 18){
//     console.log("You are eligible");
// }
// else alert(`You have to wait ${18 - age} to get eligibility`);


// Boolean operators &&, ||, !

