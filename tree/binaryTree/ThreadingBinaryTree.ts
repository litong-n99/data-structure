export interface TheadingBinaryTreeNode<T> {
    data: T;
    // 0: Child Element; 1: Previous Element
    lTag: 0 | 1;
    // 0: Child Element; 1: Next Element
    rTag: 0 | 1;
    lChild?: TheadingBinaryTreeNode<T>;
    rChild?: TheadingBinaryTreeNode<T>;
}

const normalBinaryTree: TheadingBinaryTreeNode<string> = {
    data: 'A',
    lTag: 0,
    rTag: 0,
    lChild: {
        data: 'B',
        lTag: 0,
        rTag: 0,
        lChild: {
            lTag: 0,
            rTag: 0,
            data: 'D'
        },
        rChild: {
            data: 'F',
            lTag: 0,
            rTag: 0,
            lChild: {
                lTag: 0,
                rTag: 0,
                data: 'E'
            }
        }
    },
    rChild: {
        data: 'C',
        lTag: 0,
        rTag: 0,
        lChild: {
            data: 'G',
            lTag: 0,
            rTag: 0,
            rChild: {
                lTag: 0,
                rTag: 0,
                data: 'H'
            }
        },
        rChild: {
            lTag: 0,
            rTag: 0,
            data: 'I'
        }
    }
};

function inOrderRecursion<T>(tree: TheadingBinaryTreeNode<T> | undefined, list: TheadingBinaryTreeNode<T>[]) {
    if (!tree) return;
    inOrderRecursion(tree.lChild, list);
    list.push(tree);
    inOrderRecursion(tree.rChild, list);
}

function theadlize<T>(tree: TheadingBinaryTreeNode<T>) {

    const treelist: TheadingBinaryTreeNode<T>[] = [];
    inOrderRecursion(tree, treelist);

    treelist.forEach((item, index) => {
        const preiousEle = treelist[index - 1];
        const nextEle = treelist[index + 1];
        if (preiousEle && !item.lChild) {
            item.lChild = preiousEle;
            item.lTag = 1;
        }

        if (nextEle && !item.rChild) {
            item.rChild = nextEle;
            item.rTag = 1;
        }
    })
}

theadlize(normalBinaryTree);


console.log(normalBinaryTree);