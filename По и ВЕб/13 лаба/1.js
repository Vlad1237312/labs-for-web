function showSeason() {
  const seasonResultElement = document.getElementById("seasonResult");
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  // Проверяем текущий месяц и определяем соответствующую пору года и месяцы
  let season, months;
  if (currentMonth >= 0 && currentMonth <= 2) {
    season = "зима";
    months = ["Декабрь", "Январь", "Февраль"];
  } else if (currentMonth >= 3 && currentMonth <= 5) {
    season = "весна";
    months = ["Март", "Апрель", "Май"];
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    season = "лето";
    months = ["Июнь", "Июль", "Август"];
  } 
  else if  (currentMonth >= 9 && currentMonth <= 11) {
    season = "осень";
    months = ["Сентябрь", "Октябрь", "Ноябрь"];
  }
  else {
    season = "зима";
    months = ["Декабрь", "Январь", "Февраль"];
  }
  // Выводим результат
  seasonResultElement.innerHTML = "Месяцы, относящиеся к поре " + season + ":";
  const monthsHtml = "<ul>" +
    months.map(month => "<li>" + month + "</li>").join('') +
    "</ul>";
  seasonResultElement.innerHTML += monthsHtml;
}

function showAge() {
  const ageResultElement = document.getElementById('ageResult');
  const birthDate = prompt('Введите вашу дату рождения в формате гггг-мм-дд');
  const age = calculateAge(birthDate);
  ageResultElement.innerText = "Ваш возраст составляет: " + age + " лет (вы ну очень старый человек)";
}

function calculateAge(birthDate) {
  const currentDate = new Date();
  const splitDate = birthDate.split('-');
  const year = parseInt(splitDate[0]);
  const month = parseInt(splitDate[1]) - 1;
  const day = parseInt(splitDate[2]);
  
  const birth = new Date(year, month, day);
  
  let age = currentDate.getFullYear() - birth.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthMonth = birth.getMonth();
  
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

function startTimer() {
  const timerResultElement = document.getElementById('timerResult');
  startDate = new Date();
  timerResultElement.innerText = "Время начала: " + startDate;
}

function endTimer() {
  const timerResultElement = document.getElementById('timerResult');
  if (!startDate) {
    timerResultElement.innerText = "Сначала нужно нажать кнопку Start";
    return;
  }
  endDate = new Date();
  const diff = endDate - startDate;
  timerResultElement.innerText = "Прошло времени: " + diff + " лет :) >>>>> миллисекунд";
}

function showArrayLength() {
  const arrayLengthResultElement = document.getElementById('arrayLengthResult');
  const inputElement = document.getElementById('arrayInput');
  const inputString = inputElement.value;
  // Разбиваем строку на элементы массива
  const arr = inputString.split(', ');
  const length = arr.length;
  arrayLengthResultElement.innerText = "Длина массива: " + length;
}

function showSymbolAtIndex() {
  const symbolResultElement = document.getElementById('symbolResult');
  const str = prompt('Введите строку');
  const index = prompt('Введите индекс');
  const symbol = getSymbolAtIndex(str, index);
  symbolResultElement.innerText = "Символ индекса " + index + ": " + symbol;
}

function getSymbolAtIndex(str, index) {
  return str.charAt(index);
}

Number.prototype.isOdd = function() {
  return this % 2 !== 0;
}

function checkIsOdd() {
  const isOddResultElement = document.getElementById('isOddResult');
  const number = parseInt(prompt('Введите число'));
  const isOdd = number.isOdd();
  isOddResultElement.innerText = "Число " + number + (isOdd ? ' нечетное' : ' четное');
}

function checkStartsWithDigit() {
  const startsWithDigitResultElement = document.getElementById('startsWithDigitResult');
  const str = prompt('Введите строку');
  const startsWithDigit = /^[0-9]/.test(str);
  startsWithDigitResultElement.innerText = "Строка " + (startsWithDigit ? 'начинается' : 'начинается с чего угодно, но не') + " с цифры";
}

function checkStartsWithChar() {
  const startsWithCharResultElement = document.getElementById('startsWithCharResult');
  const str = prompt('Введите строку');
  const char = prompt('Введите символ');
  const startsWithChar = str[0] === char;
  startsWithCharResultElement.innerText = "Строка " + (startsWithChar ? 'начинается' : 'начинается с чего угодно, но не') + " с " + char;
}

function isPalindromeCheck(str) {
  const cleanStr = str.toLowerCase().replace(/[^\w]+/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

function checkIsPalindrome() {
  const isPalindromeResultElement = document.getElementById('isPalindromeResult');
  const str = prompt('Введите строку для проверки на Палиндром');
  const isPalindrome = isPalindromeCheck(str);
  isPalindromeResultElement.innerText = "Строка " + (isPalindrome ? 'является' : 'может быть чем угодно, но не') + " палиндромом";
}