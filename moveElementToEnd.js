function moveElementToEnd(array, toMove) {
  // Write your code here
    //declare ansArr
    let ansArr = [];
    //iterate through array
    for (i = 0; i < array.length; i++) {
        //if array[i] === toMove
        if (array[i] === toMove) {
            //push array[i] to ansArr
            ansArr.push(array[i]);
        }
    }
    //iterate through array
    for (i = 0; i < array.length; i++) {
        //if array[i] !== toMove
        if (array[i] !== toMove) {
            //push array[i] to ansArr
            ansArr.push(array[i]);
        }
    }
    return ansArr;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));