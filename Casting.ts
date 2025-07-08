let X : unknown = "Hello";
console.log((X as string).length);
X = 12;
console.log((X as string).length);
 // using the casting the value of X type get changed 

 // casing using <>

 console.log((<string>X).length); // worked same like as

 // Force casting

 console.log(((X as unknown) as string).length); // this also doing the same thing but it is cast unkown 1st to force the erroe not comming