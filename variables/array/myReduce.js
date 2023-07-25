Array.prototype.myReduce = function(callbackFn, initial) {
  let result = initial;
  const len = this.length;
  for (let index = 0; index < len; index++) {
    const current = this[index];
    result = callbackFn(result, current)
  }
  return result;
}

const drive = [
  { id:'f001', type: 'file', name: 'abc.txt', size: 1983, parent:'root' },
  { id:'d001', type: 'directory',  name: 'study', size: 0, parent: 'root'},
  { id:'f002', type: 'file', name: 'xyz.txt', size: 2048, parent:'d001'},
  { id:'f003', type: 'file', name: 'test.txt', size: 569482, parent: 'd001'},
  { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
];

const transformed = drive.myReduce((result, current) => {
  if(current.type === 'file'){
    result.files.push(current);
  } else {
    result.directories.push(current)
  }
  return result;
}, { files:[], directories:[]})

console.log(transformed);

const totalFileCount = drive.myReduce((result, current) => {
  if(current.type === 'file'){
    result += 1;
  }
  return result;
}, 0) 

console.log('total file count', totalFileCount)

//const arrOne = new Array(true, false);
//const arrTwo = [1, 2, 3];
//arrOne.myReduce();
//arrTwo.myReduce();




/**

String.prototype.allTrim = function(){
  console.log('all trim', this);
}

const str = 'dadsf   asdfds ';
const strOne = new String('dadsfsf  asdfsad ')
str.allTrim();
strOne.allTrim();

 */