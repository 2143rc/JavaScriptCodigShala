//Function decalarion
// function helloStudent(){
//     console.log("Hello Student")

// }
// helloStudent();
// helloStudent();
// helloStudent();
// helloStudent();
// helloStudent();
/*
Function  with parameters

parameters vs arguments

*/

/*function add (a,b){
    return a+b;//return keywords
}
add (9,6);
let sum= add(5,6);
console.log(sum);


function helloStudent(){
    console.log("Hello Student")


}
 console.log(helloStudent ());
 */

/* const multiple = function(a,b){
     return a*b
 
    }
const mult_new = multiple;    


 console.log(multiple(5,6));
 console.log(mult_new(4,6));

 */
/*function greet(name='Rakesh'){
    console.log("hello "+ name);
}
greet('Rakesh Borase');
greet();*/

//Rest Parameter

/*function sumAll(a,...nums){
    console.log(a)
    console.log(nums)
    console.log(...nums)
}
sumAll(1,2,3,4,5);*/
/* function sumAll (...nums){
    //console.log(a)
    console.log(nums)
    console.log(...nums)

    let  sum = 0
    for(let i=0; i<nums.length;i++){
        sum += nums[i] 

    } return sum ;
 }
 sumAll(1,2,3,4,5,);
// console.log(sumAll(1,2,3,4,5));

*/
/*function test(){
    console.log("Inside test")
    console.log(arguments);
}
test(1,"Hello");*/

/*const great = function(guest){
    console.log("Hello " + guest)
}
great("Rakesh");

const greet1 =(guest) => console.log("Hello"+guest)//Arrow Function
greet1("Rakesh");*/

//No  Parameters

// const grren =() => console.log("hello student")


// const add =( num1,num2)=> num1+num2
// console.log(add(5,6))

//multi line arrow function

// const area =(length,width) => {
//     a = length*width;
//      return a
     
// }
//Function call 
/*function myFunction(){
    console.log("Welcome to Apna College");
    console.log("Rakesh Borae");
    console.log("Web Dev");
}
  myFunction();
  myFunction();
  myFunction();*/
  /*function myFunction(msg){
    //parameter-->input
    console.log(msg);

  }
  myFunction("I Love js",100);//argument
  // */

  //to number sum use function
  /*function sum(x,y){
    //local variable -> scope(x,y)
    sum =x + y ;
    console.log("before return");
    //console.log(x);
    return sum;

    console.log("after return");
  }
  let val = sum (3, 7);
  //console.log(x);// dont exist this line of cosde
  console.log(val);*/

  /*Arrow Functions*/
  /*function sum(a,b){
    return a+b;

  }
  //multiplication function
  function mul(a,b){
    return a*b;
  }*/
/* function sum(a,b){
    return a+b;

  }

  const arrowSum =(a,b)=> {
    console.log(a+b);
  };
  //multiplication function
  function mul(a,b){
    return a*b;
  }
  const arrowmul = (a,b) =>{
    console.log(a * b);
    return a*b;
  };
*/