//console.log(res);
// let marks_student1 = 97;
//  let marks_student2 = 98;


// let  marks =[97,85,64,36,35,98];
// console.log(marks);
// console.log(marks[0]);
// console.log(marks.length);//property

//  let heroes =["Rakesh","Rahul","Vishal","Borase"];
// // console.log(heroes);
// // console.log(heroes.length);

// console.log(heroes[0]);
// console.log(heroes[1]);
// // console.log(heroes[2]);
// // console.log(heroes[3]);
// for(let idx =0;idx< heroes.length; idx++){
//     console.log(heroes[idx]);
// }

// for(let hero of heroes ){
//     console.log(hero);
// }


// let cities =["Delhi","Pune","Mubai","Hyderabad","Gurgaon"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }
//marks of student [85,97,44,37,76,60]

// let marks=[85,97,44,37,76,60]
// let sum =0;
//Q1 sum= marks[0]+marks[1]+marks[2]

// for(let val of marks){
//     sum +=val;
// }
// let avg =sum/ marks.length;
// console.log(sum);
// console.log(`avg marks of the class = ${avg}`);

//q2 [250,645,300,900,50]

// let  items =[250,645,300,900,50]
// let idx =0;
// for (let  val of items){
//    // console.log(`value at index ${idx}= ${val}`);

//     let ofeer = val /10;

//     items[i]= items[i] - ofeer;

//     console.log(`value of after offer = ${items[i]}`);
//     i++;
// }
//push
//let foodItems =["potato", "apple", "litchi", "tomato"];
//foodItems.push("chips", "burger", "panner");
//foodItems.pop("chips");
//console.log(foodItems);


//pop
// let foodItems =["potato", "apple", "litchi", "tomato"];
//  console.log(foodItems);
//  foodItems.pop();
//  console.log(foodItems);

//deletd
// let foodItems =["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// let deletdItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted",deletdItem);

//to string
//let foodItems =["potato", "apple", "litchi", "tomato"];
//let marks=[25,45,35,85,90,89]
//console.log(foodItems);
//console.log(foodItems.toString());
//console.log(marks.toString);

//concat

// let marvel_heroes =["thor","spideram","Rakesh"];
// let dcHeroes =["superman","batman"];
 
// let heroes = marvel_heroes.concat(dcHeroes);
// console.log(heroes);


// let  marvel_heroes=["thor","spideram","Rakesh"];
// //marvel_heroes.unshift("antman");

// let val =marvel_heroes.unshift();
// console.log("deleted",val);

//slice ()


// let  marvel_heroes=["thor","spideram","Rakesh","Borase","Boss"];
// console.log(marvel_heroes);

// console.log(marvel_heroes.slice(1,2));

//splice()

// let  marvel_heroes=["thor","spideram","Rakesh","Borase","Boss"];
// console.log(marvel_heroes.slice(2));

// let arr =[1,2,3,4,5,7,8,9];
// //arr .splice(2,101,102);
// //console.log(arr);
// // add element
//  arr .splice(2,0,101);
//  console.log(arr);

//delete element
// let arr =[1,2,3,4,5,6,7,8,9];
// arr.splice(3,1);
// console.log(arr.splice);

//use for  reduce method ()
const cart=[
{item : "Shoes", price:2000},
{item : "T -Shirts",price:5000},
{item : "Jeans",price:5000},
{item : "Cap",price:5000},
{item : "Shirts",price:5000},
];
const totalPrice = cart.reduce((acc,product) =>acc + product.price,0);

console.log("Total Bill:",totalPrice);












