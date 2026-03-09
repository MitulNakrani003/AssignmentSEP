const View = {
    scoreValue: document.getElementById('score-value'),
    timeLeft: document.getElementById('time-left'),
    toggleBtn: document.getElementById('toggle-btn'),
    blocks: document.querySelectorAll('.block'),
    popupOverlay: document.getElementById('popup-overlay'),
    finalScore: document.getElementById('final-score'),
    popupCloseBtn: document.getElementById('popup-close-btn'),
    snakePopupOverlay: document.getElementById('snake-popup-overlay'),
    snakeFinalScore: document.getElementById('snake-final-score'),
    snakePopupCloseBtn: document.getElementById('snake-popup-close-btn'),

    pauseButton: document.getElementById('pause-btn'),

    updateScore(score) {
        this.scoreValue.textContent = score;
    },

    updateTimer(seconds) {
        this.timeLeft.textContent = seconds;
    },

    showMole(index) {
        const block = this.blocks[index];
        if (block.querySelector('.mole')) {
            return;
        }
        const img = document.createElement('img');
        img.src = './Assets/mole.png';
        img.classList.add('mole');
        img.alt = 'Mole';
        block.querySelector('.hole').appendChild(img);
    },

    hideMole(index) {
        const mole = this.blocks[index].querySelector('.mole');
        if (mole) mole.remove();
    },

    clearAllMoles() {
        this.blocks.forEach(block => {
            const mole = block.querySelector('.mole');
            if (mole) mole.remove();
        });
    },

    showSnake(index) {
        const block = this.blocks[index];
        if (block.querySelector('.snake')) return;
        const img = document.createElement('img');
        img.src = './Assets/snake.png';
        img.classList.add('snake');
        img.alt = 'Snake';
        block.querySelector('.hole').appendChild(img);
    },

    hideSnake(index) {
        const snake = this.blocks[index].querySelector('.snake');
        if (snake) snake.remove();
    },

    clearAllSnakes() {
        this.blocks.forEach(block => {
            const snake = block.querySelector('.snake');
            if (snake) snake.remove();
        });
    },

    showSnakeEverywhere() {
        this.clearAllMoles();
        this.clearAllSnakes();
        this.blocks.forEach(block => {
            const img = document.createElement('img');
            img.src = './Assets/snake.png';
            img.classList.add('snake');
            img.alt = 'Snake';
            block.querySelector('.hole').appendChild(img);
        });
    },

    setButtonStart() {
        this.toggleBtn.textContent = 'Start Game';
        this.toggleBtn.classList.remove('running');
    },

    setButtonStop() {
        this.toggleBtn.textContent = 'Stop Game';
        this.toggleBtn.classList.add('running');
    },

    setPause(){
        this.pauseButton.textContent = 'Pause';
    },

    setResume(){
        this.pauseButton.textContent = 'Resume';
    },

    showPopup(score) {
        this.finalScore.textContent = score;
        this.popupOverlay.classList.add('show');
    },

    hidePopup() {
        this.popupOverlay.classList.remove('show');
    },

    showSnakePopup(score) {
        this.snakeFinalScore.textContent = score;
        this.snakePopupOverlay.classList.add('show');
    },

    hideSnakePopup() {
        this.snakePopupOverlay.classList.remove('show');
    }
};
