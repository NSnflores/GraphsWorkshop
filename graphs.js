function makeProperLabrynth(labr) {
    for(var i = 0; i < labr.length; i++) {
        for(var j = 0; j < labr[0].length; j++) {
            if(labr[i][j])
                labr[i][j] = -1;
            else
                labr[i][j] = Number.MAX_VALUE;
        }
    }
}

var lab = [
    [0, 1, 0, 0, 0, 0, 1], //🀙🀫🀆🀆🀆🀆🀫
    [0, 1, 0, 1, 1, 0, 1], //🀆🀫🀆🀫🀫🀆🀫
    [0, 1, 0, 0, 1, 0, 1], //🀆🀫🀆🀆🀫🀆🀫
    [0, 1, 1, 0, 0, 0, 1], //🀆🀫🀫🀆🀆🀆🀫
    [0, 1, 0, 0, 1, 0, 1], //🀆🀫🀆🀆🀫🀆🀫
    [0, 0, 1, 0, 0, 0, 0], //🀆🀆🀫🀆🀆🀆🀆
    [0, 0, 0, 0, 1, 0, 0]  //🀆🀆🀆🀆🀫🀆🀙
];

var start = [0, 0];
var end = [6, 6];
var pathLab = [];

var solvedLab = JSON.parse(JSON.stringify(lab));

makeProperLabrynth(solvedLab);

function solve(i, j, currentSum, direction, path) {

    path.push(direction);

    if(i < 0 || j < 0 || i >= lab.length  || j >= lab[0].length){
        return;
    }
    if(currentSum >= solvedLab[end[0]][end[1]]){
        return;
    }
    if(currentSum >= solvedLab[i][j]) {
        return;
    }

    solvedLab[i][j] = currentSum;

    if(i == end[0] && j == end[1]) {
        pathLab = path;
    }


    solve(i, j+1, currentSum+1, "R", path.slice(0));
    solve(i, j-1, currentSum+1, "L", path.slice(0));
    solve(i+1, j, currentSum+1, "D", path.slice(0))
    solve(i-1, j, currentSum+1, "U", path.slice(0));

}

//solve(start[0], start[1], 0, "O", pathLab.slice(0));

/*var graph = [
    [-1,2,-1,-1,-1],
    [2,-1,-1,-1,-1],
    [2,-1,-1,-1,-1],
    [4,5,1,-1,-1],
    [-1,1,-1,2,-1]
];

var pathLab = [];
var target = 4;
var minSum = Number.MAX_VALUE;
var distances = [100, 100, 100, 100, 100];

var solve = function(actual, path, sum) {
    var pathClone = path.slice(0);
    pathClone.push(actual);

    if(actual >= minSum) {
        return;
    }
    if(actual === target && sum < minSum) {
        minSum = sum;
        pathLab = pathClone;
        return;
    }
    if(distances[actual] <= sum) {
        return;
    }

    distances[actual] = sum;

    for(var i = 0; i < graph.length; i++) {
        if(graph[i][actual] != -1) {
            solve(i, pathClone, sum + graph[i][actual]);
        }
    }
}

solve(0, [], 0);*/


console.log(pathLab);
console.log(minSum);
