"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");

var N = 5;
var M = 3;
var gameBoard = [
    [1, 1, 1, 1, 2],
    [0, 0, 1, 0, 2],
    [1, 0, 1, 0, 2],
    [1, 0, 2, 2, 2],
    [1, 0, 0, 0, 2]
];

function playGame(boardSize, parameter, board, pOneId, pTwoId) {
    var points = {
        p1: 0,
        p2: 0
    };

    if(M > N) {
        return points;
    }

    if (N > gameBoard.length || N > gameBoard[0].length) {
        return points;
    }

    var playerOneIdentifier = pOneId;
    var playerTwoIdentifier = pTwoId;

    var diffOfNAndM = N-M;
    var parameterArray = [];

    // param array and basis points
    for (var a = M, b = 1; b <= diffOfNAndM; a++, b++) {
        parameterArray.push({
            param: a,
            basis: b,
            bonus: a - M > 0 ? 0 : 0
        });
    }

    function getBasisPointsObj(count) {
        var obj = parameterArray.find(function (paramObj) {
            return paramObj.param === count;
        });
        return obj ? obj : { basis: 0, bonus: 0 };
    }

    for (var i = 0; i <= board.length - 1; i++) {
        var p1Count = 1;
        var p2Count = 1;
        var p1Count2 = 1;
        var p2Count2 = 1;
        for (var j = 0; j <= board[i].length - 1; j++) {

            // test the rows if p1 and p2 qualify for points
            if (j > 0 && board[i][j] === playerOneIdentifier && board[i][j-1] === board[i][j]) {
                p1Count++;
                // we need to compare what param it is matching and add points accordingly
                var newPoints = getBasisPointsObj(p1Count);
                points.p1 += (newPoints.basis + newPoints.bonus);
            } else {
                p1Count = 1;
            }

            if (j > 0 && board[i][j] === playerTwoIdentifier && board[i][j-1] === board[i][j]) {
                p2Count++;
                // we need to compare what param it is matching and add points accordingly
                var newPoints2 = getBasisPointsObj(p2Count);
                points.p2 += (newPoints2.basis + newPoints2.bonus);
            } else {
                p2Count = 1;
            }

            // below we wil also test the columns if p1 and p2 qualify for points
            // i = 0, j = 0
            // i = 0, j = 1
            // i = 0, j = 2

            // i = 1, j = 0
            // i = 1, j = 1
            // i = 1, j = 2
            
            if (j > 0 && board[j][i] === playerOneIdentifier && board[j - 1][i] === board[j][i]) {
                p1Count2++;
                // we need to compare what param it is matching and add points accordingly
                var newPoints3 = getBasisPointsObj(p1Count2);
                points.p1 += (newPoints3.basis + newPoints3.bonus);
            } else {
                p1Count2 = 1;
            }

            if (j > 0 && board[j][i] === playerTwoIdentifier && board[j - 1][i] === board[j][i]) {
                p2Count2++;
                // we need to compare what param it is matching and add points accordingly
                var newPoints4 = getBasisPointsObj(p2Count2);
                points.p2 += (newPoints4.basis + newPoints4.bonus);
            } else {
                p2Count2 = 1;
            }
        }
    }

    return points;
}

console.log(playGame(N, M, gameBoard, 1, 2));
