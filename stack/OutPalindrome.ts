import Stack from  './Stack';

function getPalindorm(str: string) {
    const s = new Stack<string>();
    const arr = str.split('');
    arr.forEach(i => s.push(i));

    let pStr = '';
    while (true) {
        const nChar = s.pop();
        if (nChar) {
            pStr = pStr + nChar;
        } else {
            return pStr;
        }
    }
}

console.log(getPalindorm('122333444455555'));