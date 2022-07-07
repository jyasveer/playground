"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");

var str = "Microsoft";
var N = 3;
// M - 0, 0 
// I - 1, 1 
// C - 2, 2 

// R - 3, 1 
// O - 4, 0 
// S - 5, 1 

// O - 6, 2 
// F - 7, 1 ,3
// T - 8, 0 ,999999 <<
// // result: MOTIRSFCO

// var N = 4
// M - 0,0
// I - 1,0
// C - 2,0
// R - 3,0
// O - 2,1
// S - 1,2
// O - 0,3
// F - 1,3
// T - 2,3

// column gap = N-2

/**
 * M -> [0] --- starting condition: 0
 * I -> [1]
 * C -> [2] --- boundary condition #1: n-1
 * R -> [1]
 * O -> [0] --- boundary condition #2: 0
 * ...
 * --- ending condition: strLength - 1
 * 
 * result: [chars pushed to 0]+[chars pushed to 1]+...[chars pushed to n-1]
 */

function getZigZagOutput(str, N) {
    var twoDArray = [];
    for (var n = 0; n < M; n++) {
        twoDArray.push([]);
    }
    var strLength = str.length;
    var j = 0;
    var boundaryConditionOne = 0;
    var boundaryConditionTwo = N - 1;
    var boundaryCounter = boundaryConditionOne;
    for (var i = 0; i < strLength - 1; i++) {
        var letter = str[i];
        // place the letter in the 2d array
        if (boundaryCounter < boundaryConditionTwo) {
            boundaryCounter++;
        }
        if (boundaryCounter == boundaryConditionTwo) {
            boundaryCounter++;
        }
        if (boundaryCounter >= boundaryConditionTwo) {
            boundaryCounter--;
        }

    }
}

getZigZagOutput(str, N);
