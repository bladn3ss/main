const loadingText = document.getElementById('loading-text');

const randomCodes = [
    'DSADSAsk'
];

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function getRandomCode() {
    return randomCodes[Math.floor(Math.random() * randomCodes.length)];
}

function getRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function updateLoadingText() {
    loadingText.innerText = getRandomString(10); // Генерируем случайную строку длиной 10 символов
}

// Обновляем текст каждые 200 миллисекунд
const loadingInterval = setInterval(updateLoadingText, 200);

setTimeout(function() {
    clearInterval(loadingInterval); // Останавливаем обновление текста
    loadingText.innerText = getRandomCode(); // Отображаем случайный код перед завершением загрузки
    setTimeout(() => {
        document.querySelector('.loader-container').style.display = 'none'; // Скрываем контейнер загрузки
        const content = document.getElementById('content');
        content.classList.add('visible'); // Добавляем класс для показа контента
        content.style.display = 'block'; // Устанавливаем display на block
    }, 500); // Задержка перед показом контента
}, 5000);

const randomCodeElement = document.getElementById('random-code');

function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function typeCode(code) {
    let index = 0;
    randomCodeElement.innerText = ''; // Очищаем текст перед началом печати

    const typingInterval = setInterval(() => {
        if (index < code.length) {
            randomCodeElement.innerText += code.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval); // Останавливаем интервал после завершения печати

            // Проверяем количество строк и запускаем новый код, если нужно
            const lines = randomCodeElement.innerText.split('\n');
            if (lines.length < 2) {
                generateAndTypeCode(); // Генерируем и печатаем новый код
            }
        }
    }, 100); // Скорость печати
}

// Генерация и печать случайного кода
function generateAndTypeCode() {
    const randomCode = getRandomString(20); // Увеличиваем длину кода
    typeCode(randomCode);
}

// Генерируем первый код сразу
generateAndTypeCode();

// Генерируем и отображаем случайный код каждые 3 секунды
setInterval(generateAndTypeCode, 3000);
