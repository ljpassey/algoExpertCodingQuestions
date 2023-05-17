function longestPeak(array) {
  // Write your code here.
    //declare longestPeak
    let longestPeak = 0;
    //declare i
    let i = 1;
    //while loop while i < array.length - 1
    while (i < array.length - 1) {
        //declare isPeak
        let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
        //if !isPeak
        if (!isPeak) {
            //i++
            i++;
            //continue
            continue;
        }
        //declare leftIdx
        let leftIdx = i - 2;
        //while loop while leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            //leftIdx--
            leftIdx--;
        }
        //declare rightIdx
        let rightIdx = i + 2;
        //while loop while rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            //rightIdx++
            rightIdx++;
        }
        //declare currentPeak
        let currentPeak = rightIdx - leftIdx - 1;
        //longestPeak = Math.max(longestPeak, currentPeak)
        longestPeak = Math.max(longestPeak, currentPeak);
        //i = rightIdx
        i = rightIdx;
    }

    return longestPeak;
}


