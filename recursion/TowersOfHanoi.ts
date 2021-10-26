class Towers {
    A: number[] = [];
    B: number[] = [];
    C: number[] = [];

    stepNum = 0;

    constructor() {
        for (let index = 6; index > 0; index--) {
            this.A.push(index);
        }

        this.hanoi(this.A.length);
    }

    move(from: 'A' | 'B' | 'C', to: 'A' | 'B' | 'C') {
        const moveItem = this[from].pop() as number;
        this[to].push(moveItem);
        this.stepNum++;
        console.log(`move:${moveItem}. From ${from} to ${to}`);
    }

    hanoi(len: number, from: 'A' | 'B' | 'C' = 'A', to: 'A' | 'B' | 'C' = 'C', support: 'A' | 'B' | 'C' = 'B') {
        if (len === 1) {
            this.move(from, to);
        } else {
            this.hanoi(len - 1, from, support, to);
            this.move(from, to);
            this.hanoi(len - 1, support, to, from);
        }
    }

}

const t = new Towers();

console.log(t.A, t.B, t.C, t.stepNum);