function appendtodisplay(value) {
    if (display.value === 'Error') {
        return;
    }
    display.value += value;
}

function cleartodisplay() {
    const display = document.getElementById('display');
    display.value = '';
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        display.value = 'Error';
    }
}
document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        return;
    }
    
    let key = event.key;
    if (key === '/') {
        key = '÷';
    } else if (key === '*') {
        key = '×';
    }

    if (!isNaN(key) || key === '+' || key === '-' || key === '×' || key === '÷' || key === '.') {
        appendtodisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        cleartodisplay();
    }
});
