// Note TODO:

// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

// function leapYear(input) {
//     if ((input % 4 == 0) && (input % 100 != 0) || (input % 400 == 0)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// var isLeapYear = leapYear(2023);
// console.log(isLeapYear);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

// function ageCheck(age) {
//     if (age % 2 == 0) {
//         console.log('Even');
//         return true;
//     }
//     else {
//         console.log('Odd');
//         return false;
//     }
// }
// var ageIs = ageCheck(23);
// console.log(ageIs);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-3: 
// =========================//=========================//=========================
// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 
// function hourToMin(input) {
//     var min = input * 60;
//     return min;
// }
// var result = hourToMin(3);
// console.log(result);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// ৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।
// function hourToMin(input) {
//     var min = (input * 60) * 60;
//     return min;
// }
// var neededHour = 4;
// var result = hourToMin(neededHour);
// console.log(result);



// Drive TODO: https://drive.google.com/file/d/124tnpZWQ5e_6X2zifC8HE3ILe0bBuZba/view
// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

// function hourToMin(input) {
//     var min = input * 60;
//     return min;
// }
// var result = hourToMin(3);
// console.log(result);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.
// function findLeapYear(array) {
//     leapYearArray = [];
//     for (i = 0; i < array.length; i++) {
//         if ((array[i] % 4 == 0) && (array[i] % 100 != 0) || (array[i] % 400 == 0)) {
//             leapYearArray.push(array[i]);
//         }
//     }
//     return leapYearArray;
// }
// var listOfYears = [2023, 2024, 2025, 2028, 2030, 1900];
// var result = findLeapYear(listOfYears);
// console.log(result);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-3: 
// =========================//=========================//=========================
// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.

// function findOddSum(array) {
//     oddNumberArray = [];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] % 2 != 0) {
//             oddNumberArray.push(array[i]);
//         }
//     }
//     return oddNumberArray;
// }
// function sumOfOddNumbers(array) {
//     sum = 0;
//     for (var j = 0; j < array.length; j++) {
//         sum = sum + array[j];
//     }
//     return sum;
// }

// var numbers = [5, 7, 8, 10, 45, 30];
// var findOdd = findOddSum(numbers);
// var result = sumOfOddNumbers(findOdd);
// console.log(result);