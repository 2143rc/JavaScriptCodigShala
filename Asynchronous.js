/*function grret(name,cb){
    console.log(`hello ${name}`)
    cb()
}


function goodbye(){
    console.log("Good Bye")
}

grret("Rakesh Borase",goodbye);*/
/*
console.log(`helo from the first line`);

function cb1(){
    console.log("Hello From the cb1");
}

setTimeout(cb1, 3000);
console.log("Hello fro the last line");*/
// call back function

/*
function boilWater(callback){
    console.log(`Boilling water ...`);
    setTimeout( ()=>{
        console.log("wate is boiled0");
        callback();

    },2000 )

}


function cookPasta(callback){
    console.log(`Cooking Pasta ...`);
    setTimeout( ()=>{
        console.log("Pasta is cooked");
        callback();

    },2000 )

}


function prepareSauce(callback){
    console.log(`prepareSauce ...`);
    setTimeout( ()=>{
        console.log("Sauce is prepared");
        callback();

    },2000 )

}


function mixPastaAnaSauce(callback){
    console.log(`Mixing Pasta and the Sauce...`);
    setTimeout( ()=>{
        console.log("Dinner is ready");
        callback();

    },2000 )

}
boilWater(()=>{
     cookPasta(()=>{
        mixPastaAnaSauce(()=>{
            console.log(`Enjoy your meal`)
        }
        
        )
     }

     )
}

)*/

