class LinkedList<T> {
    next: null | LinkedList<T> = null;
    data?: T;
    constructor(data: T, next: LinkedList<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

function printLinkedList<T>(ll: LinkedList<T> | undefined | null) {
    if (!ll) {
        console.log([]);
        return;
    }

    const arr: T[] = [];
    
    let current = ll;
    while(current.data) {
        arr.push(current.data);
        if(!current.next) break;
        current = current.next;
    }

    console.log(arr);
}

function insert<T>(ll: LinkedList<T>, index: number, val: T) {
    if (index < 0) {
        throw new Error('insert error : out of range');
    }

    if (index === 0) {
        return new LinkedList(val, ll);
    }

    let liNext = ll.next;
    let current = ll;
    for (let i = 0; i <= index; i++) {
        if (i === index) {
            const newItem = new LinkedList(val, liNext);
            current.next = newItem;
            return ll;
        }
        if (!liNext) {
            if (i === index - 1) {
                const newItem = new LinkedList(val);
                current.next = newItem;
                return ll;
            }
            throw new Error('insert error : out of range');
        }
        current = liNext;
        liNext = liNext.next;
    }
    return ll;
}

function deleteLLItem<T>(ll: LinkedList<T>, index: number) {
    if (index < 0) {
        throw new Error('insert error : out of range');
    }

    if (index === 0) {
        return ll.next;
    }

    let current = ll;
    for (let i = 0; i <= index; i++) {
        if (i === index - 1) {
            current.next = current.next?.next ?? null;
            return ll;
        }
        if (!current.next?.next) {
            throw new Error('insert error : out of range');
        }
        current = current.next;
    }
}

function get<T>(ll: LinkedList<T>, index: number) {
    if (index < 0) {
        throw new Error('insert error : out of range');
    }

    let current = ll;
    for (let i = 0; i <= index; i++) {
        if (i === index) {
            return current.data;
        }
        if (!current.next) {
            throw new Error('insert error : out of range');
        }
        current = current.next;
    }
}

function update<T>(ll: LinkedList<T>, index: number, newVal: T) {
    if (index < 0) {
        throw new Error('insert error : out of range');
    }

    let current = ll;
    for (let i = 0; i <= index; i++) {
        if (i === index) {
            current.data = newVal;
            return ll;
        }
        if (!current.next) {
            throw new Error('insert error : out of range');
        }
        current = current.next;
    }
    throw new Error('insert error : out of range');
}

let ll = new LinkedList('b');

ll = insert(ll, 1, 'c');
ll = insert(ll, 0, 'a');

printLinkedList(ll);

// const dl = deleteLLItem(ll, 2);

// printLinkedList(dl);

// console.log(get(ll, 2));

ll = update(ll, 0, '1');

printLinkedList(ll);