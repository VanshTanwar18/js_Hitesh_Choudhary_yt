// Stack (Primitive), Heap (Non-Primitive)
//  (copy provided)   (reference provided)
let myYoutubename = "STRANGEVT";

let anotherName = myYoutubename;
anotherName = "chaiAurcode";

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);
