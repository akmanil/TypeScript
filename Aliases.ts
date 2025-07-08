type CarYear = number;
type CarModel = string;   // this will nake your type 
type CarColor = string;

type Car = {
    year :CarYear ,
    model : CarModel,         // this is also used above type object
    color : CarColor
}

const carYear:CarYear = 2015;
const carModel : CarModel = "Toyota";    //this will be crated using of above own type object
const carColor :CarColor = "Black";
const car :Car ={
    year:carYear,
    model :carModel,
    color :carColor
}
console.log(car);