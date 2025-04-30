// stack (primitive)
// in stack when ever a variable is stored in other variable or value , when it printed in console it provides a copy of that original vlaue .
// and equivalantly when a variable stored in other varialble is updated , it first copies the original into the stack and make copy of it then is updated   

let myYoutuber_name = "nikhildotcom"

let anotherName = myYoutuber_name
anotherName = "Niklodian"


console.log(anotherName);
console.log(myYoutuber_name);

//   heap (Non-Primitive)
// in this unlike stack the obeject that is stored in a another object or variable , the change in one is applied all over the values in the heap


let userOne = {
    email : "user@google.com",
    upi : "user@sbi"
}

let userTwo = userOne

userTwo.email = "data@google.com"

console.log(userOne);
console.log(userTwo);
