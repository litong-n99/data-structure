function getFibResult(index: number): number {
    if (index < 0) throw new Error("index can't less than 0");

    if (index === 0) return 0;
    else if (index === 1) return 1;
    else {
        return getFibResult(index - 1) + getFibResult(index - 2);
    }
}

console.log(getFibResult(40));