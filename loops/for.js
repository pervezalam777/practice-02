console.log('---- for loop ----');
// for(initialization; condition; increment) {}
for(let counter = 0; counter < 5; counter++) {
  console.log('counter without break', counter);
}

for(let counterIndex = 0; true ; counterIndex++) {
  if(counterIndex > 4){
    break;
  }
  console.log('counter with break', counterIndex);
}