var age1 = 23;
var age2 = 18;
var age3 = 12;
var age4 = 72;

function eligibilietee(age) {
  if (age > 21) {
    console.log("Eligible");
  } else if (age == 21) {
    console.log("Learning");
  } else {
    console.log("Not eligible");
  }
}

eligibilietee(age1)
eligibilietee(age2)
eligibilietee(age3)
eligibilietee(age4)
