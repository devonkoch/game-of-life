var io = require('./io');
var Game = require('./game');

function getPath(type, version) {
    return 'games/' + type + '/' + type + version + '.txt';
}

for(var i = 0; i < 4; i++) {
    (function(){
        i = i.toString();
        var inputFile = getPath('input', i);
        var outputFile = getPath('output', i);
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
            var cycleCount = 0;
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
    })();
}


