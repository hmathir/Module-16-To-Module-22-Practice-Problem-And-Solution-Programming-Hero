// Conseptual Session :02
// Function Object Apply Js - Fahim Ahammed Firoz.


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// Write a function that will take a number and will check the number is positive or negative.
// function checkNumber(num) {
//     if (num >= 0) {
//         console.log('Positive Number');
//     } else {
//         console.log('Negetive Number');
//     }
// }
// checkNumber(3);




// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// function isPrime(num) {
//     for (i = 2; i * i <= num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// var result = isPrime(15);
// console.log(result);





// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-3: 
// =========================//=========================//=========================
// Write a function named findArea() that will take base and height of a triangle and will return the area of triangle.

// function findArea(base, height) {
//     const area = 1 / 2 * base * height;
//     return area;
// }
// let inputBase = 3;
// let inputHeight = 3;
// const triangleAreaIs = findArea(inputBase, inputHeight);
// console.log(triangleAreaIs);




// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-4: 
// =========================//=========================//=========================
// Write a function named findArea() that will take height and width of a rectangle and will return the area of rectangle.


// function findArea(height, width) {
//     const area = width * height;
//     return area;
// }
// let inputHeight = 20;
// let inputWidth = 20;
// const rectangleAreaIs = findArea(inputHeight, inputWidth);
// console.log(rectangleAreaIs);




// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-5: 
// =========================//=========================//=========================
// Write a function which will take an integer and will return the square of a number.
// function square(input) {
//     const squareNumber = input * input;
//     return squareNumber;
// }
// let num = 2;
// const result = square(num);
// console.log(result);



// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-5: 
// =========================//=========================//=========================
// Write a function that will taka an array and calculate the sum of odd numbers greater than 10 and less than 50.

// function numbers(array) {
//     var sum = 0;
//     for (i = 0; i < array.length; i++) {
//         if (array[i] % 2 != 0) {
//             if (array[i] > 10 && array[i] < 50) {
//                 sum = sum + array[i];
//             }
//         }
//     }
//     return sum;
// }
// var number = [11, 21, 10, 50, 40, 20, 9];
// var result = numbers(number);
// console.log(result);