let Union : number | string; // | this symbol is used for Union

Union = 15;
console.log(Union);
Union = "Its union";
console.log(Union);

// function upperCase (code : string | number){
//     console.log(`the code is converted to uppercase :  ${code.toUpperCase()}`)
// }

// this will give error

// function upperCase(code: string | number) {
//     console.log(`the code is converted to uppercase: ${code.toString().toUpperCase()}`);
// }
// upperCase("Anil");
// this is the type and another type is 

function upperCase(code: string | number) {
    if (typeof code === 'string') {
        console.log(`the code is converted to uppercase: ${code.toUpperCase()}`);
    } else {
        console.log(`the code is a number: ${code}`);
    }
} 
upperCase("Anil");
upperCase(96);
// this is using if else
