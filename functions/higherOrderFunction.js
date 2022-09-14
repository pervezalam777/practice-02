// Higher order function
function greetings(callback) {
  const hello = 'Hello!! ' + callback();
  console.log(hello);
}

function getName() {
  return 'Pervez';
}

function getParentName() {
  return 'Nasim';
}

greetings(getName);
greetings(getParentName);