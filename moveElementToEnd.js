function moveElementToEnd(array, toMove) {
  // Write your code here

  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      array.splice(i, 1)
      array.push(toMove);
    }
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));