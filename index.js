 
 
 function distanceFromHqInBlocks(number) {
   if (number > 42) {
    return number - 42
   } else {
       return 42 - number
   }
  }

 
 function distanceFromHqInFeet(number) {
    if (number > 42) {
    return (number - 42) * 264;
 }  else {
     return (42 - number) * 264
 }
 }



 
 function distanceTravelledInFeet(number1, number2) {
    if (number2 > number1) {
        return (number2 - number1) * 264;
       }   else {
            return (number1 - number2) * 264
        }
    }
    
    
    
 function calculatesFarePrice(number1, number2) {
    let distance = distanceTravelledInFeet(number1, number2);
    let fare = .02
    if 
    (distance <= 400) {
        return 0
    } 
    else if 
    (distance > 400 && distance < 2000) {
        return (distance - 400) * fare
    }
    else if 
    (distance <= 2500) {
        return 25
    }
    if
    (distance > 2500) {
        return "cannot travel that far" 
    }

 }
 