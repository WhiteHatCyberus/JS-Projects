var bird={
    haswings:true,
    canfly:true,
    hasfeathers:true
}
var eagle=Object.create(bird);
console.log("eagle 1:",eagle)
console.log("eagle wings:",eagle.haswings)
console.log("eagle feathers:",eagle.hasfeathers)
console.log("eagle fly:",eagle.canfly)
var eagle2=Object.create(eagle);
var penguin1=Object.create(bird);
penguin1.canfly=false;
console.log("eagle 2:",eagle2)
console.log("eagle2 wings:",eagle2.haswings)
console.log("eagle2 feathers:",eagle2.hasfeathers)
console.log("eagle2 fly:",eagle2.canfly)
console.log("penguin1:",penguin1)
console.log("penguin1 wings:",penguin1.haswings)
console.log("penguin1 feathers:",penguin1.hasfeathers)
console.log("penguin1 fly:",penguin1.canfly)