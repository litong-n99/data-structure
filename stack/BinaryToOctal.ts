import Stack from  './Stack';

function binaryToOctal(binary: string) {
    const s = new Stack<number>();
    binary.split('').forEach(bItem => {
        const bNum = Number(bItem);
        s.push(bNum);
    });

    let octal = '';
    while (s.getLen() > 0) {
        const num1 = s.pop() ?? 0;
        const num2 = s.pop() ?? 0;
        const num3 = s.pop() ?? 0;
        let char = num1 * 1 + num2 * 2 + num3 * 4;
        octal = char + octal;
    }
    return octal;
}

console.log(binaryToOctal('10010110'));