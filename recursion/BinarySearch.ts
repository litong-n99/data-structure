const arr = [1,3,5,21,52,64,76,82,94,102,204,305,692,712,848,988,1023];
        //   0 1 2 3  4  5  6  7  8  9   10  11  12  13  14  15  16

function binarySearch(arr: number[], findItem: number, startIndex?: number, endIndex?: number): number {
    const start = startIndex ?? 0;
    const end = endIndex ?? (arr.length - 1);
    const middle = 0 | (((end - start) / 2) + start);
    
    if (findItem === arr[middle]) {
        return middle;
    } else if (findItem > arr[middle]) {
        if (end - middle === 1) {
            if (arr[end] === findItem) return end;
            return -1;
        }
        return binarySearch(arr, findItem, middle, end);
    } else {
        if (middle - start === 1) {
            if (arr[start] === findItem) return start;
            return -1;
        }
        return binarySearch(arr, findItem, start, middle);
    }
}

arr.forEach(i => {
    console.log(binarySearch(arr, i))
})

console.log(binarySearch(arr, 666));