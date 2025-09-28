/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
isEmpty(undefined) // => true
isEmpty(new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']])) // => false
isEmpty(new Set(['value1', 'value2', 'value3'])) // => false
*/

function isEmpty(value) {
  console.log(typeof value, Object.entries(value));
  if (value === null) {
    return true;
  } else if (value === true || false) {
    return true;
  } else if (typeof value === 'number') {
    return true;
  } else if (!value) {
    return true;
  } else if (Array.isArray(value) && value.length === 0) {
    return true;
  } else if (
    typeof value === 'object' &&
    Object.keys(value).length === 0 &&
    (value instanceof Map || value instanceof Set) === false
  ) {
    return true;
  } else if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  return false;
}

console.log(
  isEmpty(
    new Map([
      ['1', 'stre'],
      [1, 'num1'],
      [true, 'bool1'],
    ])
  )
);
