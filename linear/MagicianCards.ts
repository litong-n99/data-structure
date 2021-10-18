class LinkedList<T> {
    next: null | LinkedList<T> = null;
    data?: T;
    constructor(data: T, next: LinkedList<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

// need return tail
function genCircle(len: number) {
    const ll = new LinkedList(-1);
    let current = ll;
    for (let index = 1; index <= len; index++) {
        if (index === 1) {
            continue;
        }

        current.next = new LinkedList(-1);
        current = current.next;
    }
    current.next = ll;
    return current as LinkedList<number>;
}

const cards: number[] = [];

for (let index = 13; index > 0; index--) {
    cards.push(index);
}


function getMagicianCardsOrder() {
    const tail = genCircle(13);
    const ll = tail.next as LinkedList<number>;
    
    let gap = 0;
    let gapCd = gap;

    let current = ll;

    while (cards.length > 0) {
        if (gapCd === 0) {
            if (current.data !== -1) {
                current = current.next as LinkedList<number>;
            } else {
                current.data = cards.pop();
                gap = gap + 1;
                gapCd = gap;
            }

            continue;
        }

        if (current.data === -1) {
            gapCd--;
        }

        current = current.next as LinkedList<number>;
    }

    tail.next = null;

    const orders: number[] = [];
    current = ll;
    while (true) {
        orders.push(current.data as number);
        if (current.next) {
            current = current.next;
        } else {
            return orders;
        }
    }

}

console.log(getMagicianCardsOrder());