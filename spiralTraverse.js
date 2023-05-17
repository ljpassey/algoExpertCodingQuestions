function spiralTraverse(array) {
  // Write your code here.

    //declare ansArr
    let ansArr = [];
    //declare rowStart
    let rowStart = 0;
    //declare rowEnd
    let rowEnd = array.length - 1;
    //declare colStart
    let colStart = 0;
    //declare colEnd
    let colEnd = array[0].length - 1;

    //while loop while rowStart <= rowEnd && colStart <= colEnd
    while (rowStart <= rowEnd && colStart <= colEnd) {
        //iterate through array
        for (let i = colStart; i <= colEnd; i++) {
            //push array[rowStart][i] to ansArr
            ansArr.push(array[rowStart][i]);
        }
        //iterate through array
        for (let i = rowStart + 1; i <= rowEnd; i++) {
            //push array[i][colEnd] to ansArr
            ansArr.push(array[i][colEnd]);
        }
        //iterate through array
        for (let i = colEnd - 1; i >= colStart; i--) {
            //if rowStart === rowEnd
            if (rowStart === rowEnd) {
                //break
                break;
            }
            //push array[rowEnd][i] to ansArr
            ansArr.push(array[rowEnd][i]);
        }
        //iterate through array
        for (let i = rowEnd - 1; i > rowStart; i--) {
            //if colStart === colEnd
            if (colStart === colEnd) {
                //break
                break;
            }
            //push array[i][colStart] to ansArr
            ansArr.push(array[i][colStart]);
        }
        //rowStart++
        rowStart++;
        //rowEnd--
        rowEnd--;
        //colStart++
        colStart++;
        //colEnd--
        colEnd--;
    }

    return ansArr;

}

console.log(spiralTraverse(array))
