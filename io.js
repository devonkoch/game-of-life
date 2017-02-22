var fs = require('fs');

function readText(file, callback) {
    fs.readFile(file, function(err, data) {
        if (err) return callback(err);
        data = data.toString().split('\n');
        callback(null, data);
    });
};

function writeFile(file, data) {
    fs.writeFile(file, data, function(err) {
        if (err) return console.log(err);
        console.log('Output written to /output');
    });
};

function getBoard(inputFile, callback) {
    readText(inputFile, function(err, data) {
        var board = [];
            cycles = parseInt(data[0]);

        for (var i = 2; i < data.length; i++) {
            board.push(data[i].split(' ')
                .map(function(intString) {
                    return intString === '1' ? 1 : 0;
                }));
        }

        callback(board, cycles);

    });
};


module.exports = {
    getBoard: getBoard,
    writeFile: writeFile
};
