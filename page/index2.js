const popupAdd = document.querySelector('.popup-add');
const popupAddButton = document.querySelector('.profile__add-button');
const popupCloseAddForm = popupAdd.querySelector('.popup-add__close-icon');
const formAddElement = document.querySelector('.popup-add__container');
const addNameInput = formAddElement.querySelector('.popup-add__name');
const addCardInput = formAddElement.querySelector('.popup-add__link');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const element = document.querySelector('.element');

initialCards.forEach(function (item) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementItem = elementTemplate.cloneNode(true);

    elementItem.querySelector('.element__image').src = item.link;
    elementItem.querySelector('.element__caption').textContent = item.name;
    
    element.append(elementItem);
});

function createCards(name, image) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementItem = elementTemplate.cloneNode(true);
    elementItem.querySelector('.element__image').src = image;
    elementItem.querySelector('.element__image').alt = name;
    elementItem.querySelector('.element__caption').textContent = name;

    elementItem.querySelector('.element__image-like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__image-like_active');
    });

    elementItem.querySelector('.element__image-like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__image-like_active');
    });
}