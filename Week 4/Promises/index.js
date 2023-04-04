
// This is how we create an instance of Promise
//Here we are resolving it, which means the response was fulfilled
let promise = new Promise(function(resolve, reject) {
    resolve('Transaction Approved!'); // That the promise resolved succesfully!

})

//This is how we create an instance of Promise
//Here we are rejecting it, which means the response was rejected
let promise2 = new Promise(function(resolve, reject) {
    reject('Transaction Approved!'); // That the promise got rejected!

})


//************************************ 
//Promise Resolve and Rejecting working together!
//************************************ 

let balance = 10000;
let promise3 = new Promise(function(resolve, reject) {
    let burbeeySuitPrice = 1200;
    console.log('Trying to do a transaction more than $1000, buy a burberry Suit');

    balance = balance - burbeeySuitPrice; // -200
    if(balance > 0){
        resolve('Resolved')
    } else{
        reject('Partial Transaction completed, use another CC to complete the transaction')
    }
})




promise3.then(function(response){
    console.log(response);
}).catch(function( error ){
    console.log(error);
})

let number = 20;
let evenPromise = newPromise(function(resolve, reject){
    if(number % 2 === 0){
        let succesResponse = {
            message:"Successfully divisible by 2",
            isEven: true
        }
        resolve(succesResponse);
    } else{
        let errorResponse = {
            message: "not divisible by 2",
            isEven:false
        }
        reject(errorResponse);

    }
})

evenPromise.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
})

//If you are resolving and rejecting at the same time
let num =4;
let newPromise = newPromise(function(resolve, reject) {
    resolve(num);

    reject(num);
})

newPromise.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
})


//***********************************************************************
// ASYNC AWAIT, another way to wait for the promise
//***********************************************************************


//evenPromise

async function checkEvenNumbers(){
    //FIRST WAY ***********************************
    // evenPromise.then(function(response){
    //     console.log(response);
    // }).catch(function(error){
    //     console.log(error);
    // })

    //SECOND WAY ***********************************
    let response = await evenPromise;
    return response;
 
}


let finalResponse;
try {
    let finalResponse = await checkEvenNumbers(); // this will be like then block
} catch(error){
    console.log(error, "error found!!!") // this will be like catch block
}
    console.log(finalResponse);


if (finalResponse.isEven){
    alert("Hey I got an even value...")
}
//SIDE NOTE WHAT ARE CLASSES, LETS UNDERSTAND USING EXAMPLE:
class Car {
    constructor(model, make){
        this.model = model;
        this.make = make;
    }
}

let ferrari = new Car('Ferrari', '2022');