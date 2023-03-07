

function isValidSubsequence(array, sequence) {
    let idx = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === sequence[idx]) {
        idx++;
      }
    }
    return idx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]));
