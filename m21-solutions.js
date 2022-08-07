// Note TODO:
// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

// function smallNumber(input) {
//     let defaultSmallNumber = input[0];
//     for (i = 0; i < input.length; i++) {
//         if (input[i] < defaultSmallNumber) {
//             defaultSmallNumber = input[i];
//         }
//     }
//     return defaultSmallNumber;
// }
// var numbers = [0, 333, 11, 33, 2, -1, -3];
// var result = smallNumber(numbers)
// console.log(result);




// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

//Using PARAMETAR & Math.min Function.

// function smallFromThreeNumbers(n1, n2, n3) {
//     var small = Math.min(n1, n2, n3);
//     console.log(small);
// }
// smallFromThreeNumbers(-22, 44, -999);

// Using PARAMETAR & IF/ElSE

// function smallFromThreeNumbers(n1, n2, n3) {
//     if (n1 < n2 && n1 < n3) {
//         console.log(n1, 'is Smallest Number');
//     }
//     else if (n2 < n1 && n2 < n3) {
//         console.log(n2, 'is Smallest Number');
//     }
//     else {
//         console.log(n3, 'is Smallest Number');
//     }
// }
// smallFromThreeNumbers(-22, 44, -999);


// Using ARRAY & Math.min Function

// function smallestNumber(input) {
//     for (i = 0; i < input.length; i++) {
//         var smallN = Math.min(input[i]);
//     }
//     return smallN;
// }
// var numbers = [1, 2, 4, -1, 0, -99];
// var result = smallestNumber(numbers);
// console.log(result);


// Using ARRAY & IF/ELSE Function

// function smallestNumber(input) {
//     var defaultSmallNumber = input[0];
//     for (i = 0; i < input.length; i++) {
//         if (input[i] < defaultSmallNumber) {
//             defaultSmallNumber = input[i];
//         }
//     }
//     return defaultSmallNumber;
// }
// var numbers = [33, 22, 12, 0, -89, -90];
// var result = smallestNumber(numbers);
// console.log(result);



// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-3: 
// =========================//=========================//=========================
// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

// function simpleFunction(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         sum = sum + array[i]
//         var avg = sum / array.length;
//     }
//     return avg;
// }
// var numbers = [10, 20, 30, 40, 50];
// var result = simpleFunction(numbers);
// console.log(result);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-4: 
// =========================//=========================//=========================
// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 
// function aytokhetro(length, height) {
//     var area = length * height;
//     return area;
// }
// let l = 20;
// let h = 20;
// var result = aytokhetro(l, h);
// console.log(result)


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-5: 
// =========================//=========================//=========================
// (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

// function largestNumber(array) {
//     var largestNumber = array[0];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] > largestNumber) {
//             largestNumber = array[i];
//         }
//     }
//     var secondLargestNumber = array[0];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] > secondLargestNumber && array[i] < largestNumber) {
//             secondLargestNumber = array[i];
//         }
//     }
//     return secondLargestNumber;
// }
// var numbers = [33, 11, 1, 0, 90];
// var result = largestNumber(numbers);
// console.log(result);
