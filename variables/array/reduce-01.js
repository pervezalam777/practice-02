// The following is the input data
const drive = [
  { id:'f001', type: 'file', name: 'abc.txt', size: 1983, parent:'root' },
  { id:'d001', type: 'directory',  name: 'study', size: 0, parent: 'root'},
  { id:'f002', type: 'file', name: 'xyz.txt', size: 2048, parent:'d001'},
  { id:'f003', type: 'file', name: 'test.txt', size: 569482, parent: 'd001'},
  { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
];

/**
 * output = 3
 */

/**
 * output = { file: 3, directory: 2 }
 */

/**
 * output = {
 *  files: [
 *      { id:'f001', type: 'file', name: 'abc.txt', size: 1983, parent:'root' },
 *      { id:'f002', type: 'file', name: 'xyz.txt', size: 2048, parent:'d001'},
 *      { id:'f003', type: 'file', name: 'test.txt', size: 569482, parent: 'd001'},
 *  ],
 *  directories: [
 *    { id:'d001', type: 'directory',  name: 'study', size: 0, parent: 'root'},
 *    { id:'d002', type: 'directory', name: 'pervez', size: 0, parent: 'root'}
 *  ]
 * }
 */
/**
 * const output = array.reduce((previousValue, currentValue) => {
 * return previousValue
 * }, initialValue)
 */

const totalFileCount = drive.reduce((result, current) => {
  if(current.type === 'file'){
    result += 1;
  }
  return result;
}, 0) 

console.log('total file count', totalFileCount)