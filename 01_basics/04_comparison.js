// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null >= 0);
// console.log(null == 0);
// console.log(null < 0);

/* the reason is that an equaltiy check ==  and comparisons > < >= <= work differently 
comparisons convert null to a number , treating it as 0.
thats why null >= 0 is true and null > 0 is false; */

// === (strict comparison)

console.log("2" === 2);

