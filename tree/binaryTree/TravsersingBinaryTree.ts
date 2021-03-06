import {BinaryTreeNode} from './BinaryTree';

const tree: BinaryTreeNode<string> = {
    data: 'A',
    lChild: {
        data: 'B',
        lChild: {
            data: 'D'
        },
        rChild: {
            data: 'F',
            lChild: {
                data: 'E'
            }
        }
    },
    rChild: {
        data: 'C',
        lChild: {
            data: 'G',
            rChild: {
                data: 'H'
            }
        },
        rChild: {
            data: 'I'
        }
    }
};

let orderList: string[] = [];

//============================================

function preOrderRecursion<T>(tree: BinaryTreeNode<T> | undefined, list: T[]) {
    if (!tree) return;
    list.push(tree.data);
    preOrderRecursion(tree.lChild, list);
    preOrderRecursion(tree.rChild, list);
}

preOrderRecursion(tree, orderList);
console.log('preOrder', orderList.join(' '));

//============================================
function inOrderRecursion<T>(tree: BinaryTreeNode<T> | undefined, list: T[]) {
    if (!tree) return;
    inOrderRecursion(tree.lChild, list);
    list.push(tree.data);
    inOrderRecursion(tree.rChild, list);
}

orderList = [];
inOrderRecursion(tree, orderList);
console.log('inOrder', orderList.join(' '));

//============================================
function postOrderRecursion<T>(tree: BinaryTreeNode<T> | undefined, list: T[]) {
    if (!tree) return;
    postOrderRecursion(tree.lChild, list);
    postOrderRecursion(tree.rChild, list);
    list.push(tree.data);
}

orderList = [];
postOrderRecursion(tree, orderList);
console.log('postOrder', orderList.join(' '));

//============================================
function levelOrder<T>(tree: BinaryTreeNode<T> | undefined, list: T[]) {
    if (!tree) return;
    let subTrees: BinaryTreeNode<T>[] = [tree];
    while (subTrees.length > 0) {
        const newSubTrees: BinaryTreeNode<T>[] = [];
        subTrees.forEach(itemTree => {
            list.push(itemTree.data);
            if (itemTree.lChild) {
                newSubTrees.push(itemTree.lChild);
            }
            
            if (itemTree.rChild) {
                newSubTrees.push(itemTree.rChild);
            }
        })
        subTrees = newSubTrees;
    }
}

orderList = [];
levelOrder(tree, orderList);
console.log('levelOrder', orderList.join(' '));