interface TreeItem<T> {
    parent: number;
    childIndex?: ChildIndex;
    data: T;
}

interface ChildIndex {
    rightSibling?: ChildIndex;
    index: number;
}

const a: TreeItem<String>[] = [
    { parent: -1, data: 'A', childIndex: { index: 1, rightSibling: { index: 2, rightSibling: { index: 3 } } } },
    { parent: 0, data: 'B', childIndex: { index: 4 } },
    { parent: 0, data: 'C' },
    { parent: 0, data: 'D', childIndex: { index: 5, rightSibling: { index: 6 } } },
    { parent: 1, data: 'E', childIndex: { index: 7, rightSibling: { index: 8, rightSibling: { index: 9 } } } },
    { parent: 3, data: 'F' },
    { parent: 3, data: 'G', childIndex: { index: 10 } },
    { parent: 4, data: 'H' },
    { parent: 4, data: 'I' },
    { parent: 4, data: 'J' },
    { parent: 6, data: 'K' }
];