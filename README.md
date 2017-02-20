# Conway's Game of Life

### Configure
Navigate to input.txt and type/paste your input in the following format:

```
(cycles)
(width) (height)
(row)
(row1)
..
(row[height])
<EOF>
```

##### e.g.

```
8
6 6
0 0 0 0 0 0
0 1 1 0 0 0
0 1 0 0 0 0
0 0 0 0 1 0
0 0 0 1 1 0
0 0 0 0 0 0
```


### Play
From the root directory:

```bash
$ git clone https://github.com/devonkoch/game-of-life.git
$ npm i && npm run start
```

### Use

Watch the results output every 1/2 second in your terminal (stdout), or wait for the output.txt file to appear in the root directory after the board has finished its course.