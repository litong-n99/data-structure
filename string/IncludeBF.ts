function isInclude(str: string, findStr: string) {
    if (findStr === '') return 0;
    const strArray = str.split('');
    const findStrArray = findStr.split('');

    for (let index = 0; index <= strArray.length - findStrArray.length; index++) {
        for (let fIndex = 0; fIndex < findStrArray.length; fIndex++) {
            const fElement = findStrArray[fIndex];
            const tempElement = strArray[index + fIndex];
            if (tempElement !== fElement) {
                break;
            }
            if (fIndex === findStrArray.length - 1 && tempElement === fElement) {
                return index;
            }
        }
    }
    return -1;
}

console.log(isInclude('BBC ABCDAB ABCDABCDABDE', 'ABCDABD'));