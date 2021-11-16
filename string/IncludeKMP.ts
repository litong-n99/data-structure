function getPartialMatchTable(str: string) {
    const next = [-1];
    let [j, k] = [0, -1]
    while (j < str.length - 1) {
        if (k === -1 || str[j] === str[k]) {
            if (str[++j] === str[++k]) {
                next[j] = next[k]
            } else {
                next[j] = k
            }
        } else {
            k = next[k]
        }
    }
    return next;
}

function isInclude(str: string, findStr: string) {
    if (findStr === '') return 0;

    let [i, j] = [0, 0];
    const partialTable = getPartialMatchTable(findStr);
    while (i < str.length && j < findStr.length) {
        if (j === -1 || str[i] === findStr[j]) {
            i++
            j++
        } else {
            j = partialTable[j]
        }
    }
    if (j === findStr.length) {
        return i - j
    } else {
        return -1
    }
}

console.log(isInclude('aabaaabaab', 'aabaab'));