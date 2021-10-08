class SequenceTable<T>{
    private _size = 0;
    private _list: T[] = [];
    private _length = 0;
    constructor(size: number = 20) {
        this._size = size;
        this._list = new Array(size);
    }

    public printInfo() {
        console.log('lenght', this._length);
        console.log('list', this._list);
    }

    public insert(val: T, index: number) {
        if (index < 0 || index > this._length || (this._length + 1) > this._size) {
            throw new Error('insert error : out of range');
        }

        for (let i = this._length; i > index; i--) {
            this._list[i] = this._list[i - 1];
        }

        this._list[index] = val;

        this._length++;
    }

    public delete(index: number) {
        if (index < 0 || index > this._length) {
            throw new Error('delete error : out of range');
        }

        for (let i = index; i < this._length; i++) {
            this._list[i] = this._list[i + 1];
        }

        this._length--;

        delete this._list[this._length];
    }

    public get(index: number) {
        if (index < 0 || index > this._length) {
            throw new Error('delete error : out of range');
        }

        return this._list[index];
    }
}

const list = new SequenceTable<string>();
list.insert('11', 0);
list.insert('22', 0);
list.insert('33', 1);

list.printInfo();

list.delete(1);

list.printInfo();

console.log(list.get(0));