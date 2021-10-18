class LinkedList<T> {
    next: null | LinkedList<T> = null;
    data: T;
    constructor(data: T, next: LinkedList<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

function genCircle(len: number) {
    const ll = new LinkedList(1);
    let current = ll;
    for (let index = 1; index <= len; index++) {
        if (index === 1) {
            continue;
        }

        current.next = new LinkedList(index);
        current = current.next;
    }
    current.next = ll;
    return ll;
}

function genLatinSquare(width: number = 5) {
    let ll = genCircle(width);
    const square: number[][] = [];
    for (let index = 0; index < width; index++) {
        square[index] = [];
        let current = ll;
        for (let jndex = 0; jndex < width; jndex++) {
            square[index].push(current.data);
            current = current.next as LinkedList<number>;
        }
        ll = ll.next as LinkedList<number>;
    }
    return square;
}

genLatinSquare().forEach(arr => {
    console.log(arr);
})