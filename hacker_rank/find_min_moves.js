
var tools = ['ballendmill', 'keywaycutter' , 'facemill','slotdrill', 'facemill'];

function getLeftIndex(tools, index) {
    if (index === 0) {
        return tools.length - 1;
    }
    return --index;
}

function getRightIndex(tools, index) {
    if (index === tools.length - 1) {
        return 0;
    }
    return ++index;
}

function toolChanger(tools, startIndex, target) {
    var moves = 0;

    // var currentTool = tools[startIndex];
    var leftIndex = startIndex;
    var rightIndex = startIndex;
    for (let index = 1; index < tools.length; index++) {
        // console.log(index);
        moves++;
        // console.log(leftIndex);
        leftIndex = getLeftIndex(tools, leftIndex);
        // console.log(leftIndex);
        rightIndex = getRightIndex(tools, rightIndex);
        // console.log(tools[rightIndex]);
        if (tools[leftIndex] === target || tools[rightIndex] === target) {
            break;
        }
        // break;
    }

    console.log('moves', moves);
    return moves;
}

toolChanger(tools, 0, 'facemill');


