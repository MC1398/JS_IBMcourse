// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
//console.log(globalVar); // Output: "I'm a global variable"
//console.log(globalLet); // Output: "I'm also global, but scoped with let"
//console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    var capvar = "capvar";
    let caplet = "caplet";
    const capconst = "capconst";

    capvar = "2capvar" // Ok
    caplet = "2caplet" // Ok
    //capconst = "2capconst" // da error

    console.log(capvar);
    console.log(caplet);
    console.log(capconst);
}

capvar = "3capvar" // Ok
caplet = "3caplet" // Ok
capconst = "3capconst" // Ok

console.log(capvar);
console.log(caplet);
console.log(capconst);