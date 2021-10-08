class StaticLinkedItem {
    cursor = 0;
    data?: string = '';
    constructor(cursor: number, data?: string) {
        this.cursor = cursor;
        this.data = data;
    }
}

class StaticLinkedList {
    list: StaticLinkedItem[] = [];
    maxsize = 10;
    constructor(maxsize = 10) {
        if (maxsize < 2) {
            throw new Error('Maxsize can not be less than 2');
        }
        this.maxsize = maxsize;
        for (let index = 0; index < maxsize; index++) {
            this.list.push(new StaticLinkedItem(index + 1));
        }
        this.list[maxsize - 1].cursor = -1;
    }

    insert(index: number, data: string) {
        if (index < 0) {
            throw new Error('insert: out of range');
        }
        const inserIndex = this.list[0].cursor;
        if (inserIndex >= this.maxsize) {
            throw new Error('insert: no space to insert');
        }
        let curIndex = this.list[this.list.length - 1].cursor;
        let preCur = 0;

        for (let i = 0; i <= index; i++) {
            if (i === index - 1) {
                preCur = curIndex;
            }
            if (i === index) {
                this.list[inserIndex] = new StaticLinkedItem(curIndex, data);
                if (this.list[preCur]) {
                    this.list[preCur].cursor = inserIndex;
                }
                
                this.list[0].cursor = this.list.findIndex((item, index) => !item.data && index !== 0);

                if (index === 0) {
                    this.list[this.maxsize - 1].cursor = inserIndex;
                }
                return;
            }
            if (!this.list[curIndex].data) {
                throw new Error('insert: out of range')
            }
            curIndex = this.list[curIndex].cursor;
        }
    }

    delete(index: number) {
        let cur = this.list[this.list.length - 1].cursor;
        let preCur = -1;
        for (let i = 0; i <= index; i++) {
            if (i === index - 1) {
                preCur = cur;
            }

            if (i === index) {
                if (this.list[preCur]) {
                    this.list[preCur].cursor = this.list[cur].cursor;
                } else {
                    this.list[this.maxsize - 1].cursor = this.list[cur].cursor;
                }
                this.list[cur].data = undefined;

                this.list[0].cursor = cur;
            }

            cur = this.list[cur].cursor
        }
    }

    get(index: number) {
        let cur = this.list[this.list.length - 1].cursor;
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return this.list[cur].data;
            }

            cur = this.list[cur].cursor
        }
    }
}

const sll = new StaticLinkedList(20);

sll.insert(0, 'c');
sll.insert(0, 'a');
sll.insert(1, 'b');
sll.insert(3, 'd');

console.log(sll.list);

sll.delete(3);
console.log(sll.list);

console.log(sll.get(0), sll.get(1), sll.get(2));