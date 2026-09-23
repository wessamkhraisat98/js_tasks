// first task:

function reverseNumber(number) {

    let reversed = 0;

    while (number > 0) {

        let digit = number % 10; // then first time got 3 

        reversed = reversed * 10 + digit; // 0*10 + 3 = 3  then 3*10 + 4 = 34

        number = Math.floor(number / 10); // 53244 then 5324 then 532 then 53 then 5 then 0
    }

    return reversed;
}

let x = 532443;

console.log(reverseNumber(x));


// second task:

for (let i = 0; i <= 15; i++) {

    if (i % 2 == 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}

// third task:

let number = "025468";

let result = [];

for (let i = 0; i < number.length; i++) {

    result.push(number[i]);
    if (Number(number[i]) % 2 == 0 && i < number.length - 1 && Number(number[i + 1]) % 2 == 0) {
        result.push("-");
    }

}

console.log(result.join(""));

// fourth task:

function Agechecker(age) {

    if (age >= 18) {
        console.log("The user is Adult");
    }
    else {
        console.log("The user is Minor");
    }
}

let age = Number(prompt("Enter your age:"));

Agechecker(age);

