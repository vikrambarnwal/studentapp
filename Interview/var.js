// // Var declartion -> var, let, const
// // Object => crete ,prototype
// // Function => closure 
// // Array 
// // == && === diffrence
// // Data type in JS => numer, string, object, boolean, undefined, null
// // null vs undefined
// // scope in JS  => global, function, block
// // es6 rest operator, spread 

// // let user ='John';
// // const user ="John"

// // user="Test"

// // console.info(user)


// // function printUser() {
// //     var user ='John';

// //     return function (params) {
// //         console.log('Hi', user)
// //     }
// // }
// // console.log(user);



// // var user2 = true

// // console.log('Value check ', user===user2)

// // var arrNum = [1, 2, 3, user]

// // console.log(typeof arrNum);

// // function sum(num1, num2) {

// //     // check num1, num2 is number
// //     if (typeof num1 === "number" && typeof num2 === "number") {
// //         console.log(num1 + num2);
// //     } else {
// //         console.log('num1 or num2 is nota number')

// //     }

// // }


// // let sum = (num1, num2) => {

// //     // check num1, num2 is number
// //     if (typeof num1 === "number" && typeof num2 === "number") {
// //         console.log(num1 + num2);
// //     } else {
// //         console.log('num1 or num2 is nota number')

// //     }
// // }
// // sum('ab', 2)
// // sum( 2, 'ab')
// // sum(2, 2, 53,35)

// let num1; // declartion

// num1 = null; // initilization
// // console.log(num1);


// var User ={
//     name:"User1",
//     id:1,
//     'dob':new Date('10/05/2000'),
//     5:'test'
// }
// // let [dob]= 

// console.log()
// console.log(User['5']);

// console.log(User.name)
// console.log(User['name'])


// let globalNumber = 5;

// function printUser(...user) {
//     console.log('In function globalNumber', globalNumber);

//     // let user2 = 2;
//     {
//          let user2 = 2;
//         console.log('In block globalNumber', globalNumber);
//         var user = 1;
//     }
//     // console.log(user);
//     console.log(user2);
//     // console.log(globalNumber);
// }
// printUser()

// console.log('globalNumber', globalNumber);


var arr = [1,2,21,4,1,5,5,10]

console.log(arr.sort((a,b)=>(a-b)));
