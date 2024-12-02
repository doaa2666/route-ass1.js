// Question 1
//! +  string to number
var num1 = +window.prompt("enter a number :");
console.log(num1);

// Question 2
var num = window.prompt("enter a number to check");
if (num % 2 === 0 && num % 4 === 0) {
    console.log("yes");
} else {
    console.log("no");
}

// Question 3
var numA = window.prompt("enter a number A:");
var numB = window.prompt("enter a number B:");
if (numA > numB) {
    console.log(`the max number is :${numA}`);
} else {
    console.log(`the max number is :${numB}`);
}

// Question 4
var n1 = +window.prompt("enter the number :");
if (n1 < 0) {
    console.log("negative");
} else {
    console.log("positive");
}

// Question 5
var fristNum = +window.prompt("enter frist num:");
var secondNum = +window.prompt("enter second num:");
var thirdNum = +window.prompt("enter third num:");
var max = fristNum, min = fristNum;

if (secondNum > max) {
    max = secondNum;
}
if (thirdNum > max) {
    max = thirdNum;
}
if (secondNum < min) {
    min = secondNum;
}
if (thirdNum < min) {
    min = thirdNum;
}
console.log(`max: ${max}, min: ${min}`);

// Question 6
var number = +window.prompt("enter a num:");
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Question 7
var char = window.prompt("enter char:");
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || 
    char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
    console.log("vowel");
} else {
    console.log("consonant");
}

// Question 8
var num8 = +window.prompt("Enter a number:");
for (var i = 1; i <= num8; i++) {
    console.log(i);
}

// Question 9
var num9 = +window.prompt("Enter a number:");
for (var i = 1; i <= 12; i++) {
    console.log(num9 * i);
}

// Question 10
var num10 = +window.prompt("Enter a number:");
for (var i = 2; i <= num10; i += 2) {
    console.log(i);
}

// Question 11
var base = +window.prompt("Enter the base number:");
var exponent = +window.prompt("Enter the exponent:");
var result = 1;
for (var i = 0; i < exponent; i++) {
    result *= base;
}
console.log(result);

// Question 12
var total = 0, marks;
for (var i = 1; i <= 5; i++) {
    marks = prompt(`Enter mark ${i}:`);
    total += parseInt(marks);
}
var average = total / 5;
var percentage = (total / 500) * 100;
console.log(`Total: ${total}, Average: ${average}, Percentage: ${percentage}%`);

// Question 13
var month = window.prompt("Enter the month number:");
if (month == 2) {
    console.log("28 or 29 days");
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("30 days");
} else {
    console.log("31 days");
}

// Question 14
total = 0;
for (var i = 1; i <= 5; i++) {
    marks = prompt(`Enter mark ${i}:`);
    total += parseInt(marks);
}
percentage = (total / 500) * 100;
if (percentage >= 90) {
    console.log("Grade: A");
} else if (percentage >= 80) {
    console.log("Grade: B");
} else if (percentage >= 70) {
    console.log("Grade: C");
} else if (percentage >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Question 15
var month15 = window.prompt("Enter the month number (1-12):");
switch (parseInt(month15)) {
    case 2:
        console.log("28 or 29 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    default:
        console.log("31 days");
}

// Question 16
var char16 = window.prompt("Enter a character:");
switch (char16.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

// Question 17
var num17_1 = parseInt(window.prompt("Enter the first number:"));
var num17_2 = parseInt(window.prompt("Enter the second number:"));
switch (true) {
    case (num17_1 > num17_2):
        console.log(`${num17_1} is the max`);
        break;
    case (num17_2 > num17_1):
        console.log(`${num17_2} is the max`);
        break;
    default:
        console.log("Both numbers are equal");
}

// Question 18
var num18 = parseInt(window.prompt("Enter a number:"));
switch (num18 % 2) {
    case 0:
        console.log("Even");
        break;
    default:
        console.log("Odd");
}

// Question 19
var num19 = parseInt(window.prompt("Enter a number:"));
switch (true) {
    case (num19 > 0):
        console.log("Positive");
        break;
    case (num19 < 0):
        console.log("Negative");
        break;
    default:
        console.log("Zero");
}

// Question 20
var num20_1 = parseFloat(window.prompt("Enter the first number:"));
var num20_2 = parseFloat(window.prompt("Enter the second number:"));
var operator = window.prompt("Enter an operator (+, -, *, /):");
switch (operator) {
    case '+':
        console.log(`Result: ${num20_1 + num20_2}`);
        break;
    case '-':
        console.log(`Result: ${num20_1 - num20_2}`);
        break;
    case '*':
        console.log(`Result: ${num20_1 * num20_2}`);
        break;
    case '/':
        if (num20_2 !== 0) {
            console.log(`Result: ${num20_1 / num20_2}`);
        } else {
            console.log("Division by zero is not allowed");
        }
        break;
    default:
        console.log("Invalid operator");
}
