// puzzle
// by mrdoo
// 2018 .08 .08

// html element
const output = document.getElementById('answer'); // answer
const word = document.getElementById('word'); // display button
const check = document.getElementById('check'); // checking

const game = {
    btns: [],
    current: 0,
    maxNum: 3
};

game.words = 'CRAZYBOY,NADOONADOO,SIMPSON,GGAMDOONGLEE,QUESTION'.split(',')
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    output.innerHTML = 'answer : ' + this.answer;
};

game.addButtons = function () {
    for (let i = 0; i < this.letters.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.letters[i]
        word.appendChild(btn)
        this.btns.push(btn)
    }
}

game.removeButtons = function() {
    for (let i = 0; i < this.btns.length; i++) {
        word.removeChild(this.btns[i])
    }
    this.btns = [];
}

game.isAnswer = function() {
    return this.answer === this.letters.join('');
}

game.checking = function () {
    if (this.isAnswer()) {
        check.innerHTML = '일치합니다'
    } else {
        check.innerHTML = '다릅니다.'
    }
};

game.swap = function () {
    let blank = [];
    while (this.letters.length != 0) {
        let s = this.letters.pop();
        blank.push(s);
    }

    this.letters = blank;
    this.repeat();
    this.checking();
}

game.rpush = function () {
    let s = this.letters.pop();
    this.letters.unshift(s);
    this.repeat();
    this.checking();
}

game.lpush = function () {
    let s = this.letters.shift();
    this.letters.push(s);
    this.repeat();
    this.checking();
}

game.progress = function() {
    if (this.isAnswer()) {
        this.current++
        this.removeButtons();
        this.init();
        this.shuffle();
        let str = "";
        for (let i = 0; i < this.current; i++) {
            str += '0'
        }
        progress.innerHTML = str;
    }
    
    if (this.current === this.maxNum) {
        alert("thank you for playing");
    }
};

game.init= function() {
    this.choose();
    this.addButtons();
    this.checking();
}
game.init();


game.repeat = function () {
    for (let i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i]
    }
}

// event Handler

const swap = function() {
    game.swap();
    game.progress();
}

const rpush = function() {
    game.rpush();
    game.progress();
}

const lpush = function() {
    game.lpush();
    game.progress();
}


// shuffle
game.shuffle = function () {
    const toggle = Math.floor(Math.random() * 2) === 0;

    if (toggle) {
        swap();
    }

    const n = Math.floor(Math.random() * this.letters.length);

    for (let i = 0; i < n; i++) {
        lpush();
    }
}
game.shuffle();