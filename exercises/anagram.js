const wordOne = 'race';
const wordTwo = 'care';
// dessert = tressed

/**
Approach 1:
wordOne = 'acer';
wordTwo = 'acer';
*/

/*
Approach 2:
wordOne = { r:1, a: 1, c:1, e:1 };
wordTwo = { c:1, a:1, r:1, e:1 };

dessert = {d:1, e:2, s:2, r:1, t:1}
*/

function stringToObjectMap(word) {
  const output = {}
  const len = word.length;
  let index = 0;
  while(index < len) {
    const char = word.charAt(index)
    console.log('char ', char, output[char])
    if(output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
    index++;
  }
  return output;
}

const objectMapOne = stringToObjectMap('dessert');
console.log(objectMapOne);