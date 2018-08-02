var display = function() {
    var input = document.getElementById('input').value
    console.log(input)
}
var test = document.getElementById('test');
var btn2 = document.createElement('button')
btn2.innerHTML = '실행2'
btn2.onclick = display
test.appendChild(btn2)