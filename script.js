//Waardes
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const Name = "Sarah";
const totalAmount = 120;

//Formules
if (age >= 18) {
  console.log("Welkom binnen");
} else {
  console.log("Sorry! je mag niet naar binnen");
}

if (isFemale) {
  console.log("Hello Lady");
} else {
  console.log(
    "No lady, no entry"
  );
}

if (driverStatus === "bob") {
  console.log("U mag autorijden");
} else {
  console.log("U mag lopen");
}

if (age >= 18 && age <= 25) {
    console.log("Gefeliciteerd! Je krijgt 50% Korting");
}

if (Name === "Bram" || Name === "Sarah" ) {
    console.log("Gefeliciteerd!! U heeft recht op een gratis Biertje!!"); 
}

if (totalAmount > 25 && totalAmount < 50) {
    console.log("U heeft recht op een portie (vega)bitterballen. GEHEEL GRATIS!");
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("U heeft recht op een portie nachos. GEHEEL GRATIS!");
} else if (totalAmount > 100) {
    console.log("U heeft recht op een fles champange. VAN HET HUIS!!!");
} 