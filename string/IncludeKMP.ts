function getPartialMatchTable(str: string) {
    const strArray = str.split('');
    const table: [string, number][] = [];
    for (let i = 0; i < strArray.length; i++) {
        const elements = strArray.slice(0, i + 1);
        let prefixStr = '';
        let suffixStr = '';
        let maxLen = 0;
        for (let j = 0; j < elements.length - 1; j++) {
            const prefixElement = elements[j];
            prefixStr = prefixStr + prefixElement;

            const suffixElement = elements[elements.length - 1 - j];
            suffixStr = suffixElement + suffixStr;
            
            if (prefixStr === suffixStr) {
                
                maxLen = j + 1;
            }
        }

        table.push([strArray[i], maxLen]);
    }
    return table;
}

function isInclude(str: string, findStr: string) {
    if (findStr === '') return 0;

    const strArray = str.split('');
    const findStrArray = getPartialMatchTable(findStr);

    let i = 0
    let j = 0;
    let lastFindEleNum = 0;
    for (;i < strArray.length;) {
        const fElement = findStrArray[j];
        const tempElement = strArray[i];
        if (tempElement !== fElement[0]) {
            const moveNum = j - lastFindEleNum;
            if (moveNum === 0) {
                i++;
            } else {
                j = j - moveNum;
            }
            lastFindEleNum = findStrArray[j-1]?.[1] ?? 0;
        } else {
            if (j === findStrArray.length - 1) {
                return i - findStrArray.length + 1;
            }
            lastFindEleNum = fElement[1];
            i++;
            j++;
        }
    }
    return -1;
}

// console.log(isInclude('adcadcaddcadde', 'adcadde'));
console.log(isInclude('aabaaabaab', 'aabaab'));