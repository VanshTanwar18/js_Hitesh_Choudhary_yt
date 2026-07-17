let myName = "hitesh";

// console.log(myName.truelength);


let myHeroes = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidey power is ${this.spiderman}`);
    }
};

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh();
// myHeroes.hitesh();
// myHeroes.heyHitesh();
// heroPower.heyHitesh();

// INHERITENCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,

    __proto__: TeachingSupport
}

teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport,teacher);

let anotherUsername = "ChaiAurCode       ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();