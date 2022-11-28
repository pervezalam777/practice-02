
function soldier(name) {

  function salute() {
    calloutName()
    raiseHand();
  }

  function calloutName() {
    console.log('This is captain ', name);
  }

  function raiseHand() {
    console.log('hand raised: jai hind')
  }

  return salute;
}

const pradeepSalute = soldier('Pradeep Yadav');
const pawanSalute = soldier('Pawan Nagar');
const pawan1Salute = soldier('Pawan Rajora');
const nakulSalute = soldier('Nakul saini');

nakulSalute();
pradeepSalute();