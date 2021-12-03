enum ThreadTag {
    Child,
    Thread
}

export interface TheadingBinaryTreeNode<T> {
    data: T;
    lTag: ThreadTag;
    rTag: ThreadTag;
    lChild?: TheadingBinaryTreeNode<T>;
    rChild?: TheadingBinaryTreeNode<T>;
}

const normalBinaryTree: TheadingBinaryTreeNode<string> = {
    data: 'A',
    lTag: ThreadTag.Child,
    rTag: ThreadTag.Child,
    lChild: {
        data: 'B',
        lTag: ThreadTag.Child,
        rTag: ThreadTag.Child,
        lChild: {
            lTag: ThreadTag.Child,
            rTag: ThreadTag.Child,
            data: 'D'
        },
        rChild: {
            data: 'F',
            lTag: ThreadTag.Child,
            rTag: ThreadTag.Child,
            lChild: {
                lTag: ThreadTag.Child,
                rTag: ThreadTag.Child,
                data: 'E'
            }
        }
    },
    rChild: {
        data: 'C',
        lTag: ThreadTag.Child,
        rTag: ThreadTag.Child,
        lChild: {
            data: 'G',
            lTag: ThreadTag.Child,
            rTag: ThreadTag.Child,
            rChild: {
                lTag: ThreadTag.Child,
                rTag: ThreadTag.Child,
                data: 'H'
            }
        },
        rChild: {
            lTag: ThreadTag.Child,
            rTag: ThreadTag.Child,
            data: 'I'
        }
    }
};

let preEle: TheadingBinaryTreeNode<any> | undefined;

function theadlize<T>(tree: TheadingBinaryTreeNode<T> | undefined) {
    if (!tree) return;

    theadlize(tree.lChild);
    if (!tree.lChild) {
        tree.lTag = ThreadTag.Thread;
        tree.lChild = preEle;
    }
    if (preEle) {
        if (!preEle.rChild) {
            preEle.rTag = ThreadTag.Thread;
            preEle.rChild = tree;
        }
    }

    preEle = tree;

    theadlize(tree.rChild);
}

theadlize(normalBinaryTree);

console.log(normalBinaryTree);