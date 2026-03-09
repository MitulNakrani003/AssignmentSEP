const Model = {
    score: 0,
    timeLeft: 30,
    totalTime: 30,
    isRunning: false,
    totalBlocks: 12,
    maxMoles: 3,

    board: [],
    snakeIndex: null,

    isPaused: false,

    initBoard() {
        this.board = [];
        for (let i = 0; i < this.totalBlocks; i++) {
            this.board.push({ id: i, hasMole: false, hasSnake: false });
        }
        this.snakeIndex = null;
    },

    reset() {
        this.score = 0;
        this.timeLeft = this.totalTime;
        this.isRunning = false;
        this.snakeIndex = null;
        this.isPaused = false
        this.initBoard();
    },

    activeMoleCount() {
        return this.board.filter(block => block.hasMole).length;
    },

    spawnMole() {
        if (this.activeMoleCount() >= this.maxMoles) return -1;

        const emptyBlocks = this.board.filter(b => !b.hasMole && !b.hasSnake);
        if (emptyBlocks.length === 0) return -1;

        const pick = emptyBlocks[Math.floor(Math.random() * emptyBlocks.length)];
        pick.hasMole = true;
        return pick.id;
    },

    whack(index) {
        if (!this.isRunning) return false;
        if (this.board[index].hasMole) {
            this.board[index].hasMole = false;
            this.score += 1;
            return true;
        }
        return false;
    },

    spawnSnake() {
        if (this.snakeIndex !== null) {
            this.board[this.snakeIndex].hasSnake = false;
        }

        const available = this.board.filter(b => !b.hasMole && !b.hasSnake);
        if (available.length === 0) return -1;

        const pick = available[Math.floor(Math.random() * available.length)];
        pick.hasSnake = true;
        this.snakeIndex = pick.id;
        return pick.id;
    },

    clearSnake() {
        if (this.snakeIndex !== null) {
            this.board[this.snakeIndex].hasSnake = false;
            this.snakeIndex = null;
        }
    }
};
