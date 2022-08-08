// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  


// function areaOfTriangle(a, b, c) {
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s * (s - a)(s - b)(s - c));
//     return area;
// }

// var tringleIs = areaOfTriangle(30, 45, 50);
// console.log(tringleIs);



// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।


//Find Prime Number Using Function,Parametar and loop.
// function isPrime(input) {
//     for (i = 1; i <= input; i++) {
//         if (i === 1) {
//             console.log(i, 'Not Prime');
//         }
//         else if (i === 2 || i == 3) {
//             console.log(i, 'Prime');
//         }
//         else if (i % 2 == 0 || i % 3 === 0) {
//             console.log(i, 'Not Prime');
//         }
//         else {
//             console.log(i, 'Prime');
//         }
//     }
// }
// isPrime(25);



//Find Prime Number Using Function and Parametar.
// function isPrimetwo(i) {
//     if (i === 1) {
//         console.log(i, 'Not Prime');
//     }
//     else if (i === 2) {
//         console.log(i, 'Prime');
//     }
//     else if (i % 2 == 0) {
//         console.log(i, 'Not Prime');
//     }
//     else {
//         console.log(i, 'Prime');
//     }
// }
// isPrimetwo(9);


// Correct WAY

function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
var result = isPrime(17);
console.log(result);