//using let keyword
/*
console.log(user)
let user="Mary"
*/
//you'll notice the above block gives you an error, showing that let doesn't allow variable to be used before declaration unlike using the var keyword

let user="Mary"
console.log(user)
//this works

/*let user="Anna"
console.log(user)
*/
//this block above shows that once declared no other value can be reassigned to the same variable using the let keyword

user="Anna"
console.log(user)
//now this actually works, the new value assigned to user is Anna