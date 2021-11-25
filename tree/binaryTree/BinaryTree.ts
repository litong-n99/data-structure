export interface BinaryTreeNode<T> {
    data: T;
    lChild?: BinaryTreeNode<T>;
    rChild?: BinaryTreeNode<T>;
}

const tree: BinaryTreeNode<number> = {
    data: 1,
    lChild: {
        data: 2,
        lChild: {
            data: 4
        },
        rChild: {
            data: 5
        }
    },
    rChild: {
        data: 3
    }
};