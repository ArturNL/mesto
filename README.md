Проект 4: Место

Описание:
Одностраничный сайт-визитка с информацией о пользователе (имя и род деятельности) с возможностью редактирования, с фотографиями и названиями значимых мест. Сайт адаптивный, хорошо работает на экранах от 320рх и выше.

В процессе создания проекта были использованы разнообразные технологии:

1. Закрепил знания по медиазапросам
@media screen and (max-width: 800px) {
    .header {
        max-width: 90%;
    }
}

2. Работа с js
    - Объявление переменной:
        const popup = document.querySelector('.popup');
    - объявление функции:
        function popupOn() {
            popup.classList.remove('popup_opened');
        }

3. Работа с графическим редактором Figmа.

4. Разкладка по правилам БЭМ

Планы по доработке:
В скором времени планирую:
-возможность ставить "лайки";
-прописать кроссбраузность;
-Добавить возможность добавлять фотографии.

Ссылка на сайт: https://arturnl.github.io/mesto/

Автор:
Артур Нуртдинов

Обратная связь:
nal.kzn@yandex.ru