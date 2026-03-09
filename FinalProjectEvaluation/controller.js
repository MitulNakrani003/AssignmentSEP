const Controller = {
    moleTimer: null,
    countdownTimer: null,
    snakeTimer: null,

    init() {
        View.toggleBtn.addEventListener('click', () => {
            if (Model.isRunning) {
                this.stopGame();
            } else {
                this.startGame();
            }
        });

        View.pauseButton.addEventListener('click', () => {
            if (!Model.isRunning) {
                return
            }
            if (Model.isPaused) {
                Model.isPaused = false
                View.setPause()

                this.moleTimer = setInterval(() => this.spawnOneMole(), 1000);
                this.snakeTimer = setInterval(() => this.spawnSnake(), 2000);
                this.countdownTimer = setInterval(() => {
                    Model.timeLeft -= 1;
                    View.updateTimer(Model.timeLeft);

                    if (Model.timeLeft <= 0) {
                        this.endGame();
                    }
                }, 1000);

            } else {
                Model.isPaused = true
                View.setResume()

                clearInterval(this.moleTimer);
                clearInterval(this.countdownTimer);
                clearInterval(this.snakeTimer);
            }
        });

        View.popupCloseBtn.addEventListener('click', () => {
            View.hidePopup();
            View.clearAllSnakes();
            View.updateScore(0);
            View.updateTimer(Model.totalTime);
        });

        View.snakePopupCloseBtn.addEventListener('click', () => {
            View.hideSnakePopup();
            View.clearAllSnakes();
            View.updateScore(0);
            View.updateTimer(Model.totalTime);
        });

        View.blocks.forEach(block => {
            block.addEventListener('click', () => {
                const index = Number(block.dataset.index);
                this.handleWhack(index);
            });
        });
    },

    startGame() {
        clearInterval(this.moleTimer);
        clearInterval(this.countdownTimer);
        clearInterval(this.snakeTimer);

        Model.reset();

        View.clearAllMoles();
        View.clearAllSnakes();
        View.updateScore(0);
        View.updateTimer(Model.totalTime);
        View.setButtonStop();
        View.hidePopup();
        Model.isRunning = true;
        this.fillMoles();
        this.moleTimer = setInterval(() => this.spawnOneMole(), 1000);
        this.snakeTimer = setInterval(() => this.spawnSnake(), 2000);
        this.countdownTimer = setInterval(() => {
            Model.timeLeft -= 1;
            View.updateTimer(Model.timeLeft);

            if (Model.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    },

    fillMoles() {
        while (Model.activeMoleCount() < Model.maxMoles) {
            const index = Model.spawnMole();
            if (index !== -1) {
                View.showMole(index);
            } else {
                break;
            }
        }
    },

    spawnOneMole() {
        if (Model.activeMoleCount() < Model.maxMoles) {
            const index = Model.spawnMole();
            if (index !== -1) {
                View.showMole(index);
            }
        }
    },

    spawnSnake() {
        if (Model.snakeIndex !== null) {
            View.hideSnake(Model.snakeIndex);
        }
        const index = Model.spawnSnake();
        if (index !== -1) {
            View.showSnake(index);
        }
    },

    handleWhack(index) {
        if (!Model.isRunning || Model.isPaused) return;
        if (Model.board[index].hasSnake) {
            this.snakeGameOver();
            return;
        }
        const hit = Model.whack(index);
        if (hit) {
            View.hideMole(index);
            View.updateScore(Model.score);
        }
    },

    snakeGameOver() {
        Model.isRunning = false;
        clearInterval(this.moleTimer);
        clearInterval(this.countdownTimer);
        clearInterval(this.snakeTimer);
        View.showSnakeEverywhere();
        View.setButtonStart();
        setTimeout(() => {
            View.showSnakePopup(Model.score);
        }, 1000);
    },

    stopGame() {
        if (!Model.isRunning) return;
        Model.isRunning = false;
        clearInterval(this.moleTimer);
        clearInterval(this.countdownTimer);
        clearInterval(this.snakeTimer);
        View.clearAllMoles();
        View.clearAllSnakes();
        View.updateScore(0);
        View.updateTimer(Model.totalTime);
        View.setButtonStart();

        Model.reset();
    },

    endGame() {
        Model.isRunning = false;
        clearInterval(this.moleTimer);
        clearInterval(this.countdownTimer);
        clearInterval(this.snakeTimer);
        View.clearAllMoles();
        View.clearAllSnakes();
        View.setButtonStart();

        View.showPopup(Model.score);
    }
};

Controller.init();
