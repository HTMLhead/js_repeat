const str = document.getElementById('answer').innerHTML;
const word = document.getElementById('word');

for (let i = 0; i < str.length; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = str[i]
    word.appendChild(btn);
}

const swap = function() {
    console.log('swap');
}

const rpush = function() {
    console.log('rpush');
}

const lpush = function() {
    console.log('lpush');
}