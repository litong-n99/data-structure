import Stack from  './Stack';

function binaryToDecimal(binary: string) {
    const s = new Stack<number>();
    binary.split('').forEach(bItem => {
        const bNum = Number(bItem);
        s.push(bNum);
    });
    let decimal = 0;
    for (let index = 0; s.getLen() > 0; index++) {
        const num = s.pop();
        if (num !== 0) {
            decimal += Math.pow(2, index);
        }
    }
    return decimal;
}

console.log(binaryToDecimal('00010110'));