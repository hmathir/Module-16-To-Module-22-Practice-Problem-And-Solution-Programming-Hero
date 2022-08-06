// Note TODO:
// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
// function namta(input) {
//     for (var i = 1; i <= 10; i++) {
//         var finalNamta = i * input;
//         console.log(i, 'x', input, '=', i * input);
//     }
//     return finalNamta;
// }
// var result = namta(13);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
// function upperCaseToLowerCaseConveter(input) {
//     var result = input.toLowerCase();
//     return result;
// }
// var text = 'Hoga'
// var finalResult = upperCaseToLowerCaseConveter(text);
// console.log(finalResult);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-3: 
// =========================//=========================//=========================
// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
// function fullName(fname, lname) {
//     var name = fname + ' ' + lname;
//     return name;
// }
// var firstValue = 'Hablu';
// var lastValue = 'kantu';
// var fullNameIs = fullName(firstValue, lastValue);
// console.log(fullNameIs);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-4: 
// =========================//=========================//=========================
// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
// function square(input) {
//     var result = input * input;
//     return result;
// }
// var squareResult = square(5);
// console.log(squareResult);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-5: 
// =========================//=========================//=========================
// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
// const pizza = {
//  toppings: ['cheese', 'sauce', 'pepperoni'],
//  crust: 'deep dish',
//  serves: 2
// }
// এবং pepperoni প্রিন্ট করবা। 

// var pizza = {
//     toppings: ['cheese', 'sauce', 'pepperoni'],
//     crust: 'deep dish',
//     serves: 2
// }
// console.log(pizza.toppings[2]);


// Drive TODO: 
// https://drive.google.com/file/d/1KFqqs_Nm1T7s3kBA66rDbykpghDxLa47/view?usp=sharing
// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.

// function foo() {
//     console.log('foo');
//     bar();
// }
// function bar() {
//     console.log('bar');
// }
// foo();

// Its Printing : 
// foo
// bar


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// Write a function called make_avg() which will take an three integers and return the
// average of those values.
// function make_avg(mark1, mark2, mark3) {
//     var totalMark = mark1 + mark2 + mark3;
//     var avarage = totalMark / 3;
//     return avarage;
// }
// var m1 = 10, m2 = 20, m3 = 30;
// var result = make_avg(m1, m2, m3);
// console.log(result);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-3: 
// =========================//=========================//=========================
// Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.
// function make_avg(array) {
//     sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         var marks = array[i];
//         sum = sum + marks;
//     }
//     var avarage = sum / array.length;
//     return avarage;

// }
// var items = [59, 58, 60];
// var resultIs = make_avg(items);
// console.log(resultIs);



// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-4: 
// =========================//=========================//=========================
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter


// ● Has return + Has parameter
// function odd_even(integer) {
//     if (integer % 2 == 0) {
//         console.log("Even")
//         return integer;
//     }
//     else {
//         console.log("Odd")
//     }
// }
// var result = odd_even(100);

// ● No return + Has parameter
// function odd_even(integer) {
//     if (integer % 2 == 0) {
//         console.log("Even")
//     }
//     else {
//         console.log("Odd")
//     }
// }
// odd_even(99);



// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-5: 
// =========================//=========================//=========================
// 5) You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.


// var signal = 'red';
// if (signal == 'red') {
//     console.log('Danger');
// }
// else if (signal == 'Yellow') {
//     console.log('Stop');
// }
// else if (signal == 'green') {
//     console.log('Go');
// }
// else {
//     console.log('Light Nosto');
// }
