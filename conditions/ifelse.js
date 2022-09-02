let age = true;

if(age < 0.1){
  console.log('Invalid age since it can not be negative')
}else if(age <= 1){
  console.log('you are an infant');
} else if(age <= 3){
  console.log('you are a toddler');
} else if(age <= 12) {
  console.log('you are a child');
} else if (age <= 19){
  console.log('you are a teen');
} else if (age <= 50){
  console.log('you are an adult');
} else if(age > 50) {
  console.log('you are an old');
} else {
  console.log('not a valid value in the age');
}
console.log('-------------------------------------------')
//---------------------
// const a = 100;
// const b = 20;
// if(a > b){
//   console.log('a is bigger', a);
// } else {
//   console.log('b is bigger', b);
// }

//-------
let myAge = 50.9;
console.log(typeof (typeof myAge));

if(typeof myAge == 'number'){
  if(myAge < 0.1){
    console.log('Invalid age since it can not be negative')
  }else if(myAge <= 1){
    console.log('you are an infant');
  } else if(myAge <= 3){
    console.log('you are a toddler');
  } else if(myAge < 13) {
    console.log('you are a child');
  } else if (myAge < 20){
    console.log('you are a teen');
  } else if (myAge < 51){
    console.log('you are an adult');
  } else {
    console.log('you are an old');
  }
} else {
  console.log('not a valid value in the age');
}
console.log('================================')

// ------
console.log('output is 1 ',(true && true && false));
console.log('output is 2 ',(false || true));

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
let teen = 19;
if(teen >= 13 && teen < 20) {
  console.log('you can enter...')
} else {
  console.log('you are not allowed to enter...')
}
