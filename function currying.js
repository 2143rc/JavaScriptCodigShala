/*(function (){

    console.log("This is IIFE");
})();*/
/*var message = "Gloabl"

(function(){
     var message ="local";
     console.log("from IIFE",message);
})();
  console.log("from outside",message)*
  
  /*Encapsulation using IIFE*/

  /*const counter =(function(){
    let count =0;//private field

    return{
        increment : function(){
                  count++;
                  },
        getCount: function(){
                  return count;
        }
    }
  })();


  console.log(counter.getCount())
  counter.increment();
  console.log(counter.getCount())
   counter.increment();
    counter.increment();
console.log(counter.getCount())*/

//Q1 printf number from 1 to 5
/*for(let i = 10; i>0;i--){
    //IIFE
    (function(num){
        setTimeout(()=>console.log(num),(6-num)*1000)
    })(i);
}*/

//q2 find the sum of using the element of the array using IIFE

/*let sum =(function(arr){
    return arr.reduce((acc,num)=>acc+num,0 )
})([1,2,3,4,5,6]);
console.log(sum);*/ 

//Q3 inside the function of IIFE
/*
(function(){
     var x= 43;
     console.log("Inside IIFE",x)
})();
 console.log(typeof x);
*/
 //Q4 IIFE with closures
 //return a function to add a fixed number to this to its argument

/*const add7 =(function(){
    let fixed = 7;
    return function(num){
    return num + fixed;
    }

})();
console.log(add7(5));*/
//Q5 IIFE to toggle a booleaan 
//use an iife to loggle a boolean varible 3 time and pint the result
/*let toggle =(function(){
    let state = false;

    return function(){
        state =! state;
        console.log("Toggles",state)
    }

})();

toggle();
toggle();
toggle();
toggle();*/

//Function currying

/*function add(a,b){
    return a+b;
}
console.log(add(5,6))*/

/*function add (a){
    return function(b){
       return a+b; 
    }
} console.log(add(5)(6))//ad (5)- different meaning ,add(5)(5)-Another meaning
*/

//Greeting a users

/*function greet(msg){
    return function(naame){
        console.log(msg + " ,"+ name+ "!");
    }
}
const hello =greet('hello');

console.log("Heloo Rakesh");
console.log("Heloo2 Rakesh");*/

//Infinite currying 
/*function sum (a){
    return function(b){
        if(b){
            return sum (a+b);
        }
        return a;
    }
}
console.log(sum(5)())
console.log(sum(5)(7)())
console.log(sum(5)(8)())
console.log(sum(5)(8)())*/

//Function currying in the case of the arrow function

// const add = a => b => c => a+b+c;
//  console.log(add(1)(2)(3));