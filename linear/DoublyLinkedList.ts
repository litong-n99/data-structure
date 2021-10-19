class DoublyLinkedList<T> {
    next: null | DoublyLinkedList<T> = null;
    previou: null | DoublyLinkedList<T> = null;
    data: T;
    constructor(data: T, next: DoublyLinkedList<T> | null = null, previou: DoublyLinkedList<T> | null = null) {
        this.data = data;
        this.next = next;
        this.previou = previou;
    }
}

function genAlphabet() {
    const dl = new DoublyLinkedList('A');

    let current = dl;

    for(let i = 0 ; i < 26 ; i++) {
        if (i !== 0) {
            const c = String.fromCharCode('A'.charCodeAt(0)+i);
            const newItem = new DoublyLinkedList(c);
            newItem.previou = current;
            current.next = newItem;
            current = newItem;
        }
    }

    current.next = dl;
    dl.previou = current;

    return dl;
}

const dl = genAlphabet();

function logByOrder(dl: DoublyLinkedList<string>, startIndex: number = 0) {
    let index = startIndex;
    let logDl = dl;
    while (index !== 0) {
        if (index > 0) {
            index--;
            logDl = logDl.next as DoublyLinkedList<string>;
        } else {
            index++;
            logDl = logDl.previou as DoublyLinkedList<string>;
        }
    }

    const list: string[] = [];
    
    let current = logDl;
    while (true) {
        list.push(current.data);
        current = current.next as DoublyLinkedList<string>;
        if (current === logDl) {
            return list;
        }
    }
}

console.log(logByOrder(genAlphabet(), -4));