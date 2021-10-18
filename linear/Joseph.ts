class LinkedList<T> {
    next: null | LinkedList<T> = null;
    data: T;
    constructor(data: T, next: LinkedList<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

function genCircle(len: number) {
    const ll = new LinkedList(0);
    let current = ll;
    for (let index = 0; index < len; index++) {
        if (index === 0) {
            continue;
        }

        current.next = new LinkedList(index);
        current = current.next;
    }
    current.next = ll;
    return ll;
}

const len = 30;
const ll = genCircle(len);

function getDeadOrder(ll: LinkedList<number>, len: number) {
    const deadOrder:number[] = [];
    let current = ll;
    while (deadOrder.length < len) {
        if (current.next?.next) {
            deadOrder.push(current.next.next.data);
            current.next.next = current.next.next.next;
            current = current.next.next as LinkedList<number>;
        }
    }
    return deadOrder;
}

console.log(getDeadOrder(ll, len));
