function firstDuplicateValue(array) {
  let seen = new Set();
  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      return array[i];
    } else {
      seen.add(array[i]);
    }
  }
  return -1;
}

console.log(
  firstDuplicateValue([9, 13, 6, 2, 3, 5, 5, 5, 3, 2, 2, 2, 2, 4, 3])
); // Output: 2
