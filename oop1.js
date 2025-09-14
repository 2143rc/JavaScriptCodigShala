//OOP-1
/*const obj ={
    "name":"Borase",
    "age":24,
    "greet":function(){
        console.log("Hello Rakesh");
    }
}
 const obj1 ={
    1 :"Rakesh",
    true:"Mohan"

 }
 console.log(obj1);*/

 /*
 Using the object literals

 /*/

/* const car ={
    brand:'tesla',
    model:'modeel s',
    //start(){
         //console.log("car Stared");
         start: function(){
            console.log('Card stared My');
         }
    }
// }
 car.start()*/

 //2Using the nw object Constructor
  /*const book = new Object();
  book.title = '1984';
  book.author ='George Orwell';
  book.summary= function(){
    console.log(`Good summary of the book-${history.title} by the author-${this.author}`)
  }
  console.log(book)*/

  //3 Using the constructor function- before ES6
  /*function person(name,age){
    this.name=name;
    this.age=age;
    this.greet= function(){
        console.log(`Hello i am ${this.name}`);
    }

  }
  const alice = new person(`Alice`,25);
  alice.greet();*/


//class is use bule print
//Creating objects using classes
/*class Animal{
    constructor(name,type){
        this.name = name;
        this.type= type;

    }
    sound(){
        console.log(`${this .name} makes a sound `);
    }
} 
const dog = new Animal(`dog`,`Mammal`);
dog.sound();
*/
//using object.create()

/*const Animal={
    speak(){
        console.log(`${this.Name} make a sound `)
    }

}
 const cat = Object.create(Animal);

cat.Name = "Whiskers"

console.log(cat)
cat.speak()*/


//Operation with js object
//Accessing  the values of the object

const user = { name: 'Rakeh','user role':'Admin'}
console.log(user.name)

console.log(user[`user role`]);


//Adding a key value pair

user.age =19;
console.log(user);

//Delete a key 

// delete user.name;
console.log(user);

//Iterating over the key of the give object
 for(let key in user){
    console.log(`${key}: ${user[key]}`)
 }
