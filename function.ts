function getTime():number{
   return new Date().getDate();
}

let d1 = getTime();
console.log(d1);

// Void type Function

function Value() : void {
    console.log("Hey its Void Function");
}
Value();
//Parameters

function Parameters(a:number , b : number) : void{
    return console.log(`the multiplication of two number is : ${a* b}`)
}
Parameters(2,3);

//optional parameter
function optParam(a:number , b :string ,c ? :number){
    // a = 16;
    // b="NAme";
    console.log(a , b );

}
optParam(12 , "Anil");

// default parameter means already the parameter was given


// This is the Named parameters
function NamedParameter({dividend , divisor} : {dividend : number , divisor : number}){
    return dividend / divisor;
}
console.log(NamedParameter({dividend : 12 , divisor : 4}));

// rest parametrs are there which are always array not norma;l type
// ..rest : number[]

// type alias

type neget = (Value : number) => number;

const negetFunction : neget = (Value) => Value * -1;

console.log(negetFunction(2));