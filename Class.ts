class Person {
  name: string= "";
}
      
const person = new Person();
person.name = "Anil";

console.log(person);

// doing with constructor
class Person1{
    // name1 : string;
    // constructor(name1:string){   // doing all the stuffs or doing below using public
    //      this.name1 = name1;
    // }
  
    constructor(public name1:string){} // one line equlal to the above three line

}
const person1 = new Person1("Anil1");
console.log(person1);

//parameter property with the private member visibility

class Person2{
    constructor(private name:string){

    }
    getName():string{
        return this.name
    }
}
const person2 = new Person2("Anil");
console.log(person2.getName());
//readonly

class Person3 {
    public readonly name3 :string
    constructor(name3 : string){
        this.name3 = name3;
    }
    public getName():string{
        return this.name3
    }
}

const person3 = new Person3("Anil");
console.log(person3.getName());
// person3.name3 = "Sunil" //Cannot assign to 'name3' because it is a read-only property

//inheritance implements
interface Shape{
    readonly width1: number;
    readonly height1: number;
    getArea : ()=>number;
}

class Rectangle implements Shape{
    public constructor(public readonly width1:number ,  public readonly height1 :number){
       
    }
     public getArea():number{
            return this.height1 * this.width1;
        }
}

const myRect = new Rectangle(10,20);

console.log(myRect.getArea());

// extends
class square extends Rectangle{
    public constructor(width1 : number){
        super(width1 , width1);
    }
}
const mySqr = new square(20);
console.log(mySqr.getArea());