'use strict';

/*
1. Спрашивать у пользователя пароль до тех пор,
пока он не введет правильный.
1.1 Ограничить кол-во попыток до 5.
*/

let triesCounter = 0;

while(triesCounter < MAX_TRIES){
  const userPass = prompt("Enter your password: ");
  if(userPass === GOOD_PASSWORD){
    console.log("Success");
    break;
  }
  console.log("Error");
  triesCounter++;
}

/*
2. Найти факториал числа 
*/