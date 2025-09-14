//console.log("Hello Rakesh");
//Function of Closures
/*
  Global Scope
*/

/*let name1 ="Rakesh";//Global Scope
var name2 ="Borase";//
const name3 ="Singh";//
function func1(){
    console.log("Inside function", name1,name2,name3);

}
func1();
{
    console.log("inside block",name1,name2,name3);
} 

console.log("outside",name1,name2,name3);*/

/*let name1 ="Rakesh";//Global Scope
var name2 ="Borase";//
const name3 ="Singh";//

function func1(){
    let f1 = 11;
    var f2 = 12;//function scoped only used inside the function
    const f3 = 13;
    console.log("Inside function", name1,name2,name3);

    console.log("Func Scope_ fn",f1,f2,f3);

}
func1();

{
    console.log("inside block",name1,name2,name3);

    console.log("Func Scope _ Block",f1,f2,f3);
} 

console.log("outside",name1,name2,name3);

console.log("Func Scope _ Outside",f1,f2,f3);*/


/*let name1 ="Rakesh";//Global Scope
var name2 ="Borase";//
const name3 ="Singh";//

function func1(){
    let f1 = 11;
    var f2 = 12;//function scoped only used inside the function
    const f3 = 13;
    console.log("Inside function", name1,name2,name3);

    console.log("Func Scope_ fn",f1,f2,f3);

}
func1();

{
    console.log("inside block",name1,name2,name3);
    //let age1 =25;//  //lconsole.log(age1);
    //const age =35;//console.log(age1);
    var age1 = 19;
    console.log(age1);
    

} 

console.log(age1);

console.log("outside",name1,name2,name3);

//console.log("Func Scope _ Outside",f1,f2,f3);
*/
/*
lexical Scoping
*/
  /*function outerFunction(){
     let outerVar = " I am from  outer fn";

    return function innerFunction(){

        console.log(outerVar);
     }
  }
  const innerFunction =outerFunction();
  innerFunction();*/

  /* function createCounter(){

    let count = 0;

    return function(){
        count++;
        return count;
    }
   } 
   const counter =  createCounter();
   console.log(counter());
   console.log(counter());
   console.log(counter());
   console.log(counter());
   console.log(counter());*/
   //Q 2 Implement aprivate variable using closure
    /*function secretStorage(secret){

    return{
        getSecret: function(){
            return secret;
        }
    }

    }

    const mySecret = secretStorage("I Love js !");

    console.log(mySecret.getSecret());*/

    /*Q3 create a function tht Generate unique Ids*/

    /*function idGenerator(){
        let id = 0;
        return function(){
            id++;
            return id;
        }
    }
     const generateId = idGenerator();
     console.log(generateId ());
     console.log(generateId ());
     console.log(generateId ());
     console.log(generateId ());
     console.log(generateId ());
*/
//Q 4 Implement a function that caches results using closures function
  /*function memoize(fn){

    let cache = {};
    return function(num){
        if(cache[num] !== undefined){
             console.log("fetching from the cahe ..");
             return cache[num];
        }else{
            console.log("Computing results");
            let result = fn(num);
            cache[num] = result;
            return result;
        }
    }
  } 
  const  square = memoize(x => x*x);

  
  console.log(square(4));
  console.log(square(5));
  console.log(square(4));*/

  //Q5 create Multi counter a closures function

/* function createMultiCounter(){
     let count = 0;
     return{
         increment : () => ++count,
         decrement : () => --count,
         getValue  : () => count
     };
 } 
  const counterA = createMultiCounter();

  const counterB= createMultiCounter();
  console.log(counterA.increment())
  console.log(counterA.increment()) 
  console.log(counterA.increment())
   console.log(counterA.decrement())
   console.log(counterA.decrement())
   console.log(counterA.decrement())

   console.log(counterB.getValue())
   console.log(counterB.getValue())*/










