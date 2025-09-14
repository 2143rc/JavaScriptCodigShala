//console.log("Hello Rakesh")
// if else else-if
//Swich case
//early return pattern


//if else 
// let age = 20;
//  if(age >=35){
//     console.log("I am rakesh");

//  }else{
//    console.log("I am a kid");
//  }

// multiple conditional hadle kr sakte
// let age = 7;

// if (age >=50){
//    console.log("I am old!");

// }else if(age >=20 && age<50){
//    console.log("I am a middle age person");

// }else if(age >=13 && age<20){
//    console.log("I am teen");

// }else{
//    console.log("I am a kid");
// }

/*
 Nested conditional
*/

// let age = 21;
// let hasTicket = true;
// if(age >=18){
//    if(hasTicket){
//       console.log("please enter the party hall !");
//    }else{
//       console.log("plese purchase the ticket");
//    }
// }


/*
Switch case
*/
//  let day = 5;
//  switch(day){
//    case 1 :
//       console.log("Moday");
//       break;
//    case 2 :
//       console.log("Tuesday");
//       break;
//    case 3 :
//       console.log("Wensday");
//       break;

//    case 4 :
//       console.log("Thursday");
//       break;
//    case 5 :
//       console.log("Friday");
//       break;
//    case 6 :
//       console.log("sat");
//       break; 
//    case 7 :
//       console.log("sun");
   
//       break;     
//       console.log("Envalid Day");   
//  }
// //  console.log("Envalid Day");

// //for ,while,do while 

// //  switch("activity")  {
// //   case "Get up":
// //     console.log("It is 6:30AM");
// //     break;
// //   case "Breakfast":
// //     console.log("It is 7:00AM");
// //     break;
// //   case "Drive to work":
// //     console.log("It is 8:00AM");
// //     break;
// //   case "Lunch":
// //     console.log("It is 12:00PM");
// //     break;  
// //   case "Drive home":
// //     console.log("It is 5:00PM");
// //     break;    
// //   case "Dinner":
// //     console.log("It is 6:30PM");
// //     break;
// //  }
// //   
// // let day = 5
// //  switch(day){
// //  case  "F":
// //  case "D":
// //  console.log("You've failed!");
// //  break;
// //  case "C":
// //  case "B":
// //  console.log("You've passed!");
// //  break;
// //  case "A":
// //  console.log("Nice!");
// //  break;
// //  default:
// //  console.log("I don't know this grade.");
// //  }
//   const q = '2';
//  switch (q) {
//  case '1':
//         answer = "one";
//           break;
//     case 1:
//         answer = 3;
//         break;
//     case 2:
//         answer = "this is the one";
//         break;
//     case 3:
//         answer = "this is the Two Number";
//         break;
//      default:
//          answer = "not working";
//  }
//  console.log(answer);




//   const q = 1;
 
// switch (q) {
//     case '1':
//         answer = "one";
//     case 1:
//         answer = 1;
//     case 2:
//         answer = "this is the one";
//         break;
//     default:
//         answer = "not working";
//  }
//  console.log(answer);

let score =35;
//let score = prompt("enter your score(0-100): ");
let grade;

if(score >=90 && score <=100){
    grade ='A';

}else if (score>=70 && score<=89){
    grade ='B';
}else if (score>=60 && score<=69){
    grade = 'c';
}else if (score>=50 && score<=59){
    grade ='D';
}else if (score>=0 && score<=49){
    grade = 'F'

}
console.log("According to your score,grade was:",grade);