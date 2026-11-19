Array.prototype.myReduce = function (callback, initialValue) {
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.myReduce called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const obj = Object(this);
  const len = obj.length >>> 0;

  let index = 0;
  let accumulator;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    while (index < len && !(index in obj)) {
      index++;
    }

    if (index >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    accumulator = obj[index];
    index++;
  }

  while (index < len) {
    if (index in obj) {
      accumulator = callback.call(undefined, accumulator, obj[index], index, obj);
    }
    index++;
  }

  return accumulator;
};