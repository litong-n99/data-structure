import Stack from  './Stack';

class Calculate {
    public result = 0;
    private calculateStack = new Stack<number>();
    private rpnStack = new Stack<string>();

    constructor(expression: string) {
        this.paserExpression(expression);
    }

    public printCs() {
        this.calculateStack.printStack()
    }

    private paserExpression(expression: string) {
        const arr = expression.split('');
        let numStr = '';
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if ('+-*/()'.includes(element)) {
                if (numStr !== '') {
                    this.proceedExpressionChar(numStr);
                    numStr = '';
                }
                this.proceedExpressionChar(element);
            } else {
                numStr = numStr + element;
                if (index === arr.length - 1) {
                    this.proceedExpressionChar(numStr);
                }
            }
        }
        this.removeLastRpnChar();
        this.result = this.calculateStack.pop() ?? 0;
    }


    private removeLastRpnChar() {
        while (true) {
            const popChar = this.rpnStack.pop();
            if (popChar === '(' || !popChar) {
                break;
            } else {
                this.pushCalculateStack(popChar);
            }
        }
    }

    private proceedExpressionChar(char: string) {
        if ('+-*/()'.includes(char)) {
            this.pushRpnStack(char);
        } else {
            this.pushCalculateStack(char);
        }
    }

    private pushRpnStack(char: string) {
        const last = this.rpnStack.last();
        if (!last) {
            this.rpnStack.push(char);
        } else {
            if ('+-'.includes(char)) {
                if (last === '(') {
                    this.rpnStack.push(char);
                } else {
                    this.pushCalculateStack(this.rpnStack.pop() as string);
                    this.rpnStack.push(char);
                }
            } else if ('*/'.includes(char)) {
                if ('+-'.includes(last)) {
                    // this.pushCalculateStack(char);
                    this.rpnStack.push(char);
                } else if ('*/'.includes(last)) {
                    this.pushCalculateStack(this.rpnStack.pop() as string);
                    this.rpnStack.push(char);
                } else if (last === '(') {
                    this.rpnStack.push(char);
                }
            } else if ('(' === char) {
                this.rpnStack.push(char);
            } else if (')' === char) {
                while (true) {
                    const popChar = this.rpnStack.pop();
                    if (popChar === '(' || !popChar) {
                        break;
                    } else {
                        this.pushCalculateStack(popChar);
                    }
                }
            }
        }
    }

    private pushCalculateStack(char: string) {
        if ('+-*/'.includes(char)) {
            const num2 = this.calculateStack.pop() as number;
            const num1 = this.calculateStack.pop() as number;
            let result = 0;
            if (char === '+') {
                result = num1 + num2;
            } else if (char === '-') {
                result = num1 - num2;
            } else if (char === '*') {
                result = num1 * num2;
            } else if (char === '/') {
                result = num1 / num2;
            }
            this.calculateStack.push(result);
        } else {
            this.calculateStack.push(Number(char));
        }
    }
}

// const c = new Calculate('(1+2)*(31-1)/(4-2)');
const c = new Calculate('1+(2-3)*4+10/5');
// const c = new Calculate('1+2*3');
console.log(c.result);