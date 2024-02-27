const school = "Ferdous Alam Firuz High School";
 console.log(school);
 console.log(school.toLowerCase());
 console.log(school.toUpperCase());


const subject = "Chemistry";
const book = "ChemIstRy";

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("This subject is very easier for passed");
}
else{
    console.log("This subject is very difficult for pass");
}

const drink = "     Spe    ed";
const energyDrink = "Speed ";

 if(drink.trim() === energyDrink.trim()){
    console.log("I like to drink speed");
 }
  else{
    console.log("I don't like to drink speed");
  }