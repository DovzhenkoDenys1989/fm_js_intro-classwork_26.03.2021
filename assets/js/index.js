'use strict';

//let counter = 0;

//while(true){
  //console.log(counter);
  //if(counter > 5){
  //  console.log("the end");
  //  break;
  //}
  //counter++;
//}
//console.log("End of loop");


//Вывести все чётные числа до 10;

let counter = 0;

while(counter <= 10){
  if(counter % 2 === 0){
    console.log(counter);
  }
  counter++;
}
console.log("End of loop");

//Вывести все чётные числа до 10 с continue;

let counter = 0;

while(counter <= 10){
  counter++;
  if(counter % 2 > 0){
    continue;
  }
  console.log(counter);
}
console.log("End of loop");
