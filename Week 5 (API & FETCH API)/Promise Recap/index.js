//Cakkbacks

function greeting(firstName, lastName) {
    console.log(`Hey ${firstName} ${lastName}`);
}

//greeting ("Aman", "Kaur");

//Starting a new job today

function jobStarts(callback){
    let firstName = prompt("Please enter your first Name");
    let lastName = prompt("Please enter your last name");

    callback(firstName, lastName);
}

jobStarts(greeting);

//setTimeoOut

setTimeout(() => {

}, 2000);

//FILTER

let array =[1, -10, 20, -100, 5, 40];
// I want to filter positive numbers

let positiveNumber = array.fileter((item) => {
    if(item > 0){
        return true;
    }
})
console.log(positiveNumber);

//Create a promise
let num = 10;
let promise = new Promise((resolve,reject) => {
    if (num > 0){
        resolve({
            data:num,
            message: "This number is a positive number."
        });
    }else{
        reject({
            data:num,
            message:"This is a negative nubmer."
        })
    }
})

//Resolve the promise using then and catch block

promise.then ((response) => {
    console.log(response.message);
}).catch((error) => {
    console.log(error.message);
}).finally((value) => { //Note : Finally block always get executed
    console.log("Value", value);
})

//I can write the above code as using ASYNC AWAIT:
//try and catch
async function checkNumber() {
    let output;
    try{
        output = await promise;
    } catch (error) {
        console.log(error);
        output = error;
    }

    return output;
}

let output = await checkNumber();
console.log(output);