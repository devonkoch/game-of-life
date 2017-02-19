var Game = function(board, render) {
    this.board = board;
    this.render = render;
};

Game.prototype.tick = function() {
    var self = this,
        dead = [],
        born = [],
        neighbors, sum;

    this.render(this.board);

    this.board.forEach(function(row, rowIndex) {
        row.forEach(function(cell, cellIndex) {
            neighbors = self.getNeighbors(rowIndex, cellIndex);

            sum = neighbors.reduce(function(sum, coordinate) {
                return self.getCoordinate(coordinate) + sum;
            }, 0);

            if (sum < 2 || sum > 3) {
                dead.push([rowIndex, cellIndex])
            } else if (cell === 0 && sum === 3) {
                born.push([rowIndex, cellIndex])
            }

        });
    });

    dead.forEach(function(coord) {
        self.board[coord[0]][coord[1]] = 0;
    });

    born.forEach(function(coord) {
        self.board[coord[0]][coord[1]] = 1
    });

}

Game.prototype.getNeighbors = function(rowIndex, cellIndex) {
    var rows = this.board.length,
        columns = this.board[0].length,
        directions = [-1, 0, 1],
        neighbors = [];

    directions.forEach(function(rowDirection) {
        directions.forEach(function(columnDirection) {
            if (!(rowDirection === 0 && columnDirection === 0)) {
                var neighbor = [rowIndex + rowDirection, cellIndex + columnDirection];
                // wrapping
                if (neighbor[0] === -1) {
                    neighbor[0] = rows;
                }
                if (neighbor[1] === -1) {
                    neighbor[1] = columns;
                }
                if (neighbor[0] === rows + 1) {
                    neighbor[0] = 0;
                }
                if (neighbor[1] === columns + 1) {
                    neighbor[1] = 0;
                }
                neighbors.push(neighbor);
            }
        })
    });

    return neighbors;
}

Game.prototype.getCoordinate = function(coord) {
    var cell;
    if (this.board[coord[0]]) {
        cell = this.board[coord[0]][coord[1]];
    }
    return cell ? cell : 0;
}

module.exports = Game;
