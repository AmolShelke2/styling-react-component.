console.log('-- Check if object is empty in javascript ---');

const obj = {
  name: 'Amol shelke',
  age: 18,
};

if (Object.entries(obj).length === 0) console.log('Object is empty');

const obj2 = {
  // name: 'Mr. x',
  // age: 19,
};

if (Object.values(obj2).length === 0) console.log('Object is empty');

const obj3 = {
  // name: 'Mr obj3',
  // age: 16,
};

if (Object.keys(obj3).length === 0) console.log('Object is empty');

const obj4 = {
  // name: 'Mr obj4',
  // age: 15,
};
tdfzx;
if (JSON.stringify(obj4).lenght === 0 || '{}') console.log('Object is empty');
