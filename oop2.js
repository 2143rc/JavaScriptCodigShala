//console.log("Hello Rakesh");
//USing the modern ES6 approach

/*class CoffeeMachine{
   
    #waterlevel =0;  //private field

    #checkwaterleve(){
        return this.#waterlevel
    }
    makeCoffee(){
        if(this.#checkwaterleve){
            console.log("Making Coffee...");
            this.#waterlevel -=50;

      }else{
        console.log("Please add water");
      }
    }
    fillwater(ammount){
      if(ammount>0){
        this.#waterlevel +=ammount;
        console.log("water filled")
      }
    }
}
const obj = new CoffeeMachine();

// console.log(obj);
// //console.log(obj.#waterleve)

// console.log(obj);
// obj.makeCoffee();
// obj.fillwater(100);*/
/*Abstraction before Es6
*/
/*function OnlineStore(){
    let products=[];//this is private

    function addProduct(product){//this is a private
        products.push(product);
    }
    return{
        add:function(product){
            addProduct(product)
            console.log(`${product}added to th store`);
        },
        list : function(){
            console.log("Available products",products.join(','))
        }
         

        
    }
}
const oStore = new OnlineStore();

oStore.add("i phone");

oStore.add('Laptop');

oStore.list()*/

//Encapuslation

/*class Car{
    #speed =20;// Private

    //Publlic Setter and getter method 
    getspeed(){
        return this.#speed;
    }
    setSpeed(speed){
        this.#speed = speed;
    }
}
const car = new Car();

//console.log(car.speed);
 console.log(car.getspeed());
 car.setSpeed(40);
 console.log(car.getspeed());
*/

//old way ,using Closures

/*function BankAccount(owner,balance){
    let _balance=balance;// private field
    this.getBalance = function(){

        return _balance;
    }
}
const acc = new BankAccount('Rakesh Borase',50000);
//console.log(acc._balance);

console.log(acc.getBalance());*/

//Inheritance
//Parent child relationship
//modern day 
//class:
//extend and super
/*
class Animal{
    constructor (name,sound){
        this.name=name;
        this.sound=sound;
    }

    makeSound(){
        console.log(`${this.name} makes ${this.sound} sound`)
    }
}
  class Dog extends Animal{
    constructor(name,breed){
        super(name,'Barks');
        this.breed=breed;
    }
  }

  const dog = new Dog("Tommy","Husky");
  dog.makeSound();

  /*
  
  Prototypes
  */
/* const animal ={
    eats:true
 }
 const cat ={
    meou : true
 }
 cat.__proto__= animal ;
 console.log(cat.__proto__);
 console.log(cat.meou);
 console.log(cat.eats);

*/
 /*
 Creating Prototype using the constructor function
 */

/* function Person(name,age){
    this.name = name;
    this.age = age ;
 }
 Person.prototype.greet =function(){
    console.log(`Hello i am ${this.name} and I am ${this .age} Yearsof old`);
 }
 const Rakesh = new Person("Rakesh",99);

 Rakesh.greet();*/


 //old js use prototype

/* function Employee(name,Salary){
    this.name = name ;
    this.Salary = Salary;
 }

 Employee.prototype.getDetails = function(){
    return `${this.name} earns $${this.Salary}`
 }
 //child object constructor

 function Manager(name,salary,department){
    Employee.call(this,name,salary)//calling the partent constructor
    this.department = department
 }

 Manager.prototype = Object.create(Employee.prototype)  //Inheritance

 Manager.prototype.constructor = Manager //Fixed the constructor porationnod

 const manager = new Manager("Raakesh Borase,",50000,"IT");
console.log( manager.getDetails())*/

//Polymorphism

class Animal{
    speak(){
        console.log("Animal make a sound")
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog makes a sound")
    }
}

class Cat extends Animal{
    speak(){
        console.log("Cat makes a sound")
    }
}
const animal1 = new Dog();
const animal2 = new Cat();
const animal3 = new Animal();

// animal1.speak()
// animal2.speak()
// animal3.speak()

// function make_animal_speak(animal){
//     animal.speak()
// }
// make_animal_speak(Dog)

// make_animal_speak(Cat)


/*

Multiple inheritance using Mixins
*/
/*let Canfly = (Base) => class extends Base {
    fly(){
        console.log("Flying...")

    }

}
let CanSwim = (Base) => class extends Base{
    swim(){
        console.log("Swimming..")
    }
}

 class Animal{

 }

 class Duck extends CanSwim(Canfly(Animal)){

 }
 const duck = new Duck();
 duck.swim();
 duck.fly();

*/

 