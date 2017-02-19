var io = require('./io');
var Game = require('./game');

var inputFile = 'input.txt';
var outputFile = 'output.txt';

var boards = [];

function render(board){
	var stringedBoard = '';
	board.forEach(function(row) {
		stringedBoard += row.join(' ') + '\n';
	});

	boards.push(stringedBoard);
}

io.getBoard(inputFile, function(board, cycles) {
	var currentCycle = 0;
	var game = new Game(board, render);
	var timer = setInterval(function () {
    game.tick();
    if (currentCycle === cycles) {
      clearInterval(timer);
			io.writeFile(outputFile, boards.join('\n'));
    }
    currentCycle++;
	}, 500);

});


