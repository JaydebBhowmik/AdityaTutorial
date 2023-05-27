// ==================
// declearative 
// ==================

function print() {
    // return "Hello world";
}

const result = print();
// console.log(result);


function print1(input) {
    return input;
}

// const result1 = print1("hi user asdasdsad");
// document.write(result1);



// ==================
// calculation fun 
// ==================

// function cal(a, b) {
//     const operator = prompt("please enter operator");

//     if(a!==0 && b!==0 && !isNaN(b) && !isNaN(a) ){
//         if(operator == "+"){
//             return a + b;
//         }
//         else if(operator == "-"){
//             return a > b ? a - b : b - a;
//         }
//         else if(operator == "*"){
//             return a * b;
//         }
//         else if(operator == "/"){
//             return a > b ? a / b : b / a;
//         } else {
//             return "please enter valid operator"
//         }
//     } else {
//         return "please enter valid no"
//     }
// }
// resultCal = cal(6, 12)

// console.log(resultCal);


// ==================
// fibonacci series  
// ==================

function fibonacci(range){
    // const range = prompt("Please enter range");
    // 0 1                1 2 3 5
    var a = 0, b = 1; 
    let i = 0;
    let c = a+b; 
    
    console.log(a);
    console.log(b);

    for( i ; c < range; i++){
        console.log(c);
        a=b;
        b=c;
        c = a+b; 
    }
}
// console.log(fibonacci(50))

// export {fibonacci};



// tutorial
// https://javascript.info/

// Referance
// https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// jschallenger.com

// practise

// count a string length

const array =[0, 2, 3, 4];
// console.log(array.length)




// ========================
//1. Array short (string / number)
const namestr = ["Bikash", 'Aditya', 'Arnab', 'Biswajit', 'Ayush'];
const rr = namestr.sort();
console.log("Array short string >>",namestr )





//1. Array short (string / number)
const array1 = [11, 1, 8, 41, 24 ];

// document.write("reverseNo>>", array1);

// solution 1
function compareNumbers(a, b) {
    return a - b;
}

let reverseNo = array1.sort(compareNumbers)

// solution 1
const arrResult = array1.sort((a, b) => a - b);
document.write("reverseNo>>", arrResult);


//2.  Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
const randomArr = [11, "adsa", 8, 41, 24 ];

// push add a value in a arr in last position
randomArr.push("test string")
// console.log("push",randomArr)

// pop add a value in a arr in last position
// randomArr.pop()
// console.log("pop",randomArr)

//shift remove a value frem an arr from first position
// randomArr.shift()
// console.log("shift",randomArr)

//unshift remove a value frem an arr from first position

randomArr.unshift(100)
// console.log("unshift",randomArr)



// const str = 1
console.log("typeof",typeof(str))

function chkArr(arr) {
    resultArrray = []
    arr.map((item)=>{
        if(typeof(item) !== "string") {
            return resultArrray.push(item);
        }
    })
    return resultArrray;
}
console.log("chkArr>>>>>>>>>>>>>>>>>>>>>>>>>>>",chkArr(randomArr))


//3. Create a function that takes the age in years and returns the age in days.

function agetodays(age) {
    return age * 365;
  }
  console.log(agetodays(24))








//4 new file for module and use callback script