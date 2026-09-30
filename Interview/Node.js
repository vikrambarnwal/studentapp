// What is Nodejs?
// Node Js is Single threaded? Event Loop 
// Synchronous vs Asynchronous
// Where can be use NodeJs -> Non-blocking,Rest APIs,Real Time applcation, Both (frontnend and Backend) 
// npm -> node package manager
// What is package.json -> information of project(metadata), entry file, dependencies, devDepencies
// dependencies (Production) vs devDepencies(Development)?
// Callback ->  A function passed as param to another function
// Callback hell ->  when we write callback inside callback and don't maintain properrly it's create a pyramid of doom .
// () => function
// Buffer in js/nodejs
// Promise  -> to handle asynchnrous code/process while failure, success.
// Phase/State -> Pending, Fullfilled, Rejected
// Async await (short form of Promise)

// Syne
// console.log('Start');
// console.log('Working');
// console.log('End');
// console.log('------------------')

// //Async 
// console.log('Start'); // Sync
// setTimeout(() => {  // Async
//     console.log('Working');
// }, 2000)
// console.log('End'); // Sync


// 1 print Start
// function setTimeout will run 
//  3 End
// 4 with delay Working

//------------------------------------
// Callback Vs Nested Function
// function sum(num1,num2) {
//     console.log('Called Sum', num1+num2);   
// }

// function multi(num1,num2) {
//     console.log('Called multi', num1*num2);
// }

// function math(num1,num2, param) {
//     console.log('Nums',num1,num2);
//     param(num1,num2)
// }

//  math(1,2,multi)

/** Asynchrous examples */

const fs = require('fs')

// Create / Convert code to promise
const fileRead = new Promise((Fullfilled, Reject) => {
    fs.readFile('user.txt', (err, data) => {
        if (!err) {
            Fullfilled(data.toString());
        } else {
            Reject(err.message);
        }
    })
});

// To handle promise code
async function readFile() {
    console.log('File reading started');
    try {
        const data = await fileRead
        console.log(data);
    } catch (err) {
        console.log(err.message);
    }
    console.log('File reading end'); // Sync
}

// function readFile() {
//     console.log('File reading started');
//     fileRead.then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err.message);
//     })
//     console.log('File reading end');
// }

readFile()

