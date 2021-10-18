class LinkedList<T> {
    next: null | LinkedList<T> = null;
    data?: T;
    constructor(data: T, next: LinkedList<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

const ll = new LinkedList('1', new LinkedList('2', new LinkedList('3', new LinkedList('3', new LinkedList('4', new LinkedList('5', new LinkedList('6', new LinkedList('7', new LinkedList('8', new LinkedList('9', new LinkedList('10')))))))))));

function findMiddleItem(ll: LinkedList<string>) {
    let fastCur = ll;
    let slowCur = ll;

    while(true) {
        if (!fastCur.next) {
            return slowCur;
        }
        if (!fastCur.next.next) {
            return slowCur.next;
        }
        
        fastCur = fastCur.next.next;

        if (!slowCur.next) {
            return slowCur;
        }
        slowCur = slowCur.next;

    }
}

console.log(findMiddleItem(ll)?.data);