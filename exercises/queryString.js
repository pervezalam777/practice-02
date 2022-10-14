const inputURL = 'http://www.facebook.com/profile?firstName=pervez&lastName=alam&marks=38&age=38';

function approachOne(url){
  const splittedArray = url.split('/')
  const lastIndex = splittedArray.length - 1;
  const newInput = splittedArray[lastIndex];
  //console.log('newInput ', newInput);
  const splittedNewInput = newInput.split('?');
  const pageName = splittedNewInput[0];
  console.log('page name is - ', pageName);
  const queryString = splittedNewInput[1];
  //console.log('queryString', queryString);
  const splittedQueryString = queryString.split('&');
  const len = splittedQueryString.length;
  let index = 0;
  const paramObject = {};
  while(index < len) {
    const queryParam = splittedQueryString[index];
    const splittedQueryParam = queryParam.split('=');
    const key = splittedQueryParam[0];
    let value = splittedQueryParam[1];
    //console.log('key is ', key, ' value is ', value);
    console.log(Number(value) === NaN)
    //value = isNaN(parseFloat(value)) ? value : Number(value);
    value = isNaN(Number(value)) ? value : Number(value);
    //value = Number(value) !== NaN ? value : Number(value); //ERROR
    paramObject[key] = value;
    index++;
  }
  console.log('paramObject ', paramObject)
}

approachOne(inputURL);