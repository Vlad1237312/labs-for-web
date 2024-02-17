
let textField = document.getElementById('textField');
let changeColorButton = document.getElementById('changeColorButton');
let colorFlag = false;
let colors = ['red', 'blue'];
let currentIndex = 0;

changeColorButton.addEventListener('click', function() {
    if (!colorFlag) {
        textField.value = 'текстовое поле';
        colorFlag = true;
    } else {
        textField.style.color = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }
});


let multiLineInput = document.getElementById('multiLineInput');
let searchInput = document.getElementById('searchInput');
let compareButton = document.getElementById('compareButton');

compareButton.addEventListener('click', function() {
    let inputText = multiLineInput.value;
    let searchString = searchInput.value;

    if (inputText.includes(searchString)) {
        alert('Искомая строка найдена в тексте.');
    } else {
        alert('Искомая строка не найдена.');
    }
});

