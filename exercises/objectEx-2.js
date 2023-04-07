const products = [
  {
    name:'OnePlus 1+',
    brandName: 'OnePlus',
    price: 12000,
    features: {
      color: ['blue', 'red', 'black'],
      ram: '4GB',
      camera: '20 mp'
    }
  },
  {
    name:'OnePlus 10r+',
    brandName: 'OnePlus',
    price: 32000,
    features: {
      color: ['blue', 'red', 'black'],
      ram: '16GB',
      camera: '50 mp'
    }
  }
]

const updateProducts = []

console.log(products[1].features.color);
console.log(updateProducts[1].features.color);

console.log(products[0] === updateProducts[0],  'should be true');