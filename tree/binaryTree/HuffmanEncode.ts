import {BinaryTreeNode} from './BinaryTree';

const str = 'we will we will r u';

function getBytes(s: string) {
    let binaryStr = '';
    for (let index = 0; index < s.length; index++) {
        const element = s.charCodeAt(index).toString(2);
        binaryStr = `${binaryStr}${element}`;
    }

    return binaryStr;
}

const bytes = getBytes(str);
console.log(bytes, bytes.length);

class Huffman {
    originStr = '';
    huffmanTree: BinaryTreeNode<{weight: number, data: string}>[] = [];
    encodeMap = new Map<string, string>();
    decodeMap = new Map<string, string>();
    codes = '';

    constructor(s: string) {
        this.originStr = s;
        this.genFrequencyTable();
        this.genHuffmanTree();
        this.genEncodeMap();
        this.genCode();
    }

    genFrequencyTable() {
        for (let index = 0; index < this.originStr.length; index++) {
            const element = this.originStr[index];
            const findItem = this.huffmanTree.find(item => item.data.data === element)
            if (findItem) {
                findItem.data.weight++;
            } else {
                this.huffmanTree.push({
                    data: {weight: 1, data: element}
                });
            }
        }
        this.huffmanTree = this.huffmanTree.sort((a, b) => a.data.weight - b.data.weight)
    }

    genHuffmanTree() {
        while (this.huffmanTree.length > 1) {
            let lChild = this.huffmanTree[0];
            let rChild = this.huffmanTree[1];
            if (lChild.data.weight > rChild.data.weight) {
                [lChild, rChild] = [rChild, lChild];
            }


            const newItem: BinaryTreeNode<{weight: number, data: string}> = {
                lChild,
                rChild,
                data: {
                    weight: lChild.data.weight + rChild.data.weight,
                    data: '',
                }
            }


            if (this.huffmanTree.length === 2) {
                this.huffmanTree = [newItem];
            } else {
                this.huffmanTree.splice(0, 2);

                for (let index = 0; index < this.huffmanTree.length; index++) {
                    const element = this.huffmanTree[index];
                    if (element.data.weight >= newItem.data.weight) {
                        this.huffmanTree.splice(0, 0, newItem);
                        break;
                    } else if (index === this.huffmanTree.length - 1){
                        this.huffmanTree.push(newItem);
                        break;
                    }
                }
            }
        }
    }

    genEncodeMap(code?: string, tree?: BinaryTreeNode<{
        weight: number;
        data: string;
    }>) {

        const findTree = tree ?? this.huffmanTree[0];

        if (findTree.lChild) {
            this.genEncodeMap(code ? `${code}0` : '0', findTree.lChild);
        }

        if (findTree.data.data !== '') {
            this.encodeMap.set(findTree.data.data, code ?? '0');
            this.decodeMap.set(code ?? '0', findTree.data.data);
        }

        if (findTree.rChild) {
            this.genEncodeMap(code ? `${code}1` : '1', findTree.rChild);
        }
    }

    genCode() {
        this.codes = this.originStr.split('').map(c => this.encodeMap.get(c)).join('');
    }

    decode() {
        let decodeCodes = this.codes;
        let substrLen = 1;
        let genStr = '';
        while (decodeCodes.length > 0) {
            const decodeKey = decodeCodes.substr(0, substrLen);
            const char = this.decodeMap.get(decodeKey);
            if (char) {
                decodeCodes = decodeCodes.substr(substrLen);
                genStr = `${genStr}${char}`;
                substrLen = 1;
            } else {
                substrLen++;
            }
        }

        return genStr;
    }
}

const huffman = new Huffman(str);
console.log(huffman.codes, huffman.codes.length);
console.log('decode', huffman.decode());