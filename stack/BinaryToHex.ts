import Stack from  './Stack';

const hexMapping: {[key: number]: string} = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
}

function binaryToHex(binary: string) {
    const s = new Stack<number>();
    binary.split('').forEach(bItem => {
        const bNum = Number(bItem);
        s.push(bNum);
    });

    let hex = '';
    while (s.getLen() > 0) {
        const num1 = s.pop() ?? 0;
        const num2 = s.pop() ?? 0;
        const num3 = s.pop() ?? 0;
        const num4 = s.pop() ?? 0;
        let char = num1 * 1 + num2 * 2 + num3 * 4 + num4 * 8;
        hex = hexMapping[char] + hex;
    }
    return hex;
}

console.log(binaryToHex('11011111'));