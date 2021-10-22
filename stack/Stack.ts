export default class Stack<T> {
    private stack: T[] = [];
    private len = 0;
    public last() {
        return this.stack[this.len - 1];
    }
    public getLen() {
        return this.len;
    }
    public push(item: T) {
        this.len++;
        this.stack.push(item);
    }
    public pop() {
        this.len--;
        return this.stack.pop();
    }
    public clear() {
        this.len = 0;
        this.stack = [];
    }

    public printStack() {
        console.log(this.stack);
    }
}