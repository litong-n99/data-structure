const allBoards: number[][] = [];

function getChessBoards(chessBoard: number[] = []) {
    const bansIndexs: number[] = [];
    const newLineIndex = chessBoard.length;
    chessBoard.forEach((queenIndex, lineIndex) => {
        bansIndexs.push(queenIndex);

        const inclineIndex1 = queenIndex + newLineIndex - lineIndex;
        if (inclineIndex1 <= 7) bansIndexs.push(inclineIndex1);

        const inclineIndex2 = queenIndex - (newLineIndex - lineIndex);
        if (inclineIndex2 >= 0) bansIndexs.push(inclineIndex2);
    });

    for (let index = 0; index < 8; index++) {
        if (bansIndexs.includes(index)) continue;
        const newBoard = [...chessBoard, index];
        if (newBoard.length < 8) {
            getChessBoards(newBoard)
        } else {
            allBoards.push(newBoard);
        }
    }
}

getChessBoards();
console.log(allBoards.length);