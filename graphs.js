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

var solvedLab = JSON.parse(JSON.stringify(lab));

makeProperLabrynth(solvedLab);

function solve(i, j, currentSum) {
}

solve(start[0], start[1], 0);

console.log(solvedLab);
