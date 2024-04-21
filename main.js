//  40 task starts 

// function findMiddleNumber(arr) {
//     arr.sort((a, b) => a - b);
//     const middleIndex = Math.floor(arr.length / 2);
//     if (arr.length % 2 !== 0) {
//         return arr[middleIndex];
//     } else {
//         const middleNumber = (arr[middleIndex - 1] + arr[middleIndex]) / 2;
//         return middleNumber;
//     }
// }
// const arr1 = [1, 2, 3, 4, 5];
// const middleNumber1 = findMiddleNumber(arr1);
// console.log(`ortadagi son ${middleNumber1}`);  
// const arr2 = [1, 2, 3, 4];
// const middleNumber2 = findMiddleNumber(arr2);
// console.log(` ortadagi son ${middleNumber2}`); 

// 40 task finished 


//  41 task starts 

// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O'tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     }
// ];

// books.forEach((book, index) => {
//     const readStatus = book.read ? "o'qilgan" : "o'qilmagan";
//     console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi ${readStatus}`);
// });
//  41 task finished 


// 42 task starts

// let array = ["text", "world", "laptop"];
// let length = 0
// for (let i = 0; i < array.length; i++) {
//     length = array[i].length
//     console.log(`${array[i]} ${length}`);
// }

// 42 task finished 

// 43 task starts 

// function findNNumber(obj, n) {
//     const result = {};

//     for (const key in obj) {
//         result[key] = obj[key] * n;
//     }

//     return result;
// }

// const obj = { a: 3, b: 4, c: 5, d: 6 };
// const n = 5;

// console.log(findNNumber(obj, n));

//  43 task finished 


// 44 starts  

// function getLevel (n) {

//     let result = []

//     for (let i = 0; i <= n; i++) {
//         result.push(Math.pow(2,i))
//     }
//     return result
// }

// console.log(getLevel(5));

// 44 finished 


// 45 starts 


// let animals = ['dog', 'chicken', 'dog' , 'cat', 'dog', 'dog', 'chicken', 'chicken', 'rabbit'];
// let animalCount = {};

// animals.forEach(animal => {
//     animalCount[animal] = (animalCount[animal] || 0) + 1;
// });

// console.log(animalCount);
// 45 task finished 


// 46 task stars 

// let  kvd = [5,6,3,4];
// const result = kvd.map(num => num * num);

// console.log(result); 
// 46 task finished 


// 47 task starts 
// const inputArray = [1, -4, 12,10, 0, -3, 29, -150];
// const positiveNumber = inputArray.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);

// console.log(positiveNumber); 
//  47 task finished 

// 48 task starts 

// let inputString = 'Azamat  Ergashev Umarjon ogli';
// let CapitalLetters = inputString.split(' ').map(word => word.charAt(0)).join('');

// console.log(CapitalLetters); 

// 48 task finished 

// 49 task starts 

// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// people.sort((a, b) => a.age - b.age);

// const ageDifference = people[people.length - 1].age - people[0].age;

// console.log(ageDifference); 
// 49 task finished 


// 50 task starts 

// let singleNumber = function(nums) {
//     const countMap = {};

//     nums.forEach(num => {
//         countMap[num] = (countMap[num] || 0) + 1;
//     });

//     const uniqueNumbers = Object.keys(countMap).filter(num => countMap[num] === 1);
    
//     console.log(uniqueNumbers); 
// };

// singleNumber([4, 1, 2, 1, 2, 9,]);

// 50 task finished 