var io = require('./io');
var Game = require('./game');

var inputFile = 'input.txt';
var outputFile = 'output.txt';

var boards = [];

function render(board) {
    var stringedBoard = '';
    board.forEach(function(row) {
        stringedBoard += row.join(' ') + '\n';
    });
    console.log(stringedBoard);
    boards.push(stringedBoard);
}

io.getBoard(inputFile, function(board, cycleTotal) {
    var cycleCount = 1;
    var game = new Game(board, render);
    var timer = setInterval(function() {
        game.tick();
        if (cycleCount === cycleTotal) {
            clearInterval(timer);
            io.writeFile(outputFile, boards.join('\n'));
        }
        cycleCount += 1;
    }, 500);

});
