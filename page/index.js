import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('#popup-edit');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');
const formEdit = document.querySelector('.popup__container');
const nameInput = formEdit.querySelector('.popup__name');
const jobInput = formEdit.querySelector('.popup__text');
const popupAdd = document.querySelector('#popup-add');
const popupAddButton = document.querySelector('.profile__add-button');
const popupCloseAddForm = popupAdd.querySelector('#popup-add__close');
const formAdd = document.querySelector('#popup-add__container');
const addNameInput = formAdd.querySelector('#place-input');
const addCardInput = formAdd.querySelector('#link-input');
const cardTemplate = document.querySelector('#card-template').content;
export const zoom = document.querySelector('#popup-zoom');
const cards = document.querySelector('.cards');
const zoomBtnClose = zoom.querySelector('.popup__close-icon-zoom');
const spanError = Array.from(document.querySelectorAll('.popup__input-error'));
const popupInput = Array.from(document.querySelectorAll('.popup__input'));
const forms = Array.from(document.querySelectorAll('.popup__container'));


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

const formObject = { //Проверка элементов
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__name_type_error',
    errorClass: 'popup__input-error_visible'
};

function deleteInputErrors(inputsList, form, buttonElement, formObject) {
    inputsList.forEach((inputElement) => {
        const errorElement = form.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = "";
        inputElement.classList.remove(formObject.inputErrorClass);
        if(!input.validity.valid && !buttonElement.classList.contains(formObject.inactiveButtonClass)) {
            buttonElement.classList.add(formObject.inactiveButtonClass);
        } else {
            buttonElement.classList.remove(formObject.inactiveButtonClass);
        }
    }) 
};

function renderCard(data) {
    const card = new Card(data, '#card-template');
    const cardElement = card.createCard();
    cards.prepend(cardElement);
};

initialCards.forEach(renderCard);

export function openPopup(elem) {
    elem.classList.add('popup_opened');
    const popupOpened = document.querySelector('.popup_opened');
    document.addEventListener('keydown', (evt) => {
        if(evt.key === 'Escape') {
            closePopup(popupOpened);
        }
    });
    document.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('popup_opened')) {
            closePopup(popupOpened);
        }
    });
};

function closePopup(elem) {
    elem.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
        if(evt.key === 'Escape') {
            document.querySelector('.popup_opened').classList.remove('popup_opened');
        }
    });
    document.removeEventListener('click', (evt) => {
        if(evt.target.classList.contains('popup_opened')) {
            closePopup(popupOpened);
        }
    });
};

function formPopupAddImage(elem) {
    addNameInput.value = "";
    addCardInput.value = "";
    if (document.querySelector('#place-input-error').classList.contains(formObject.errorClass) || document.querySelector('#link-input-error').classList.contains(formObject.errorClass)) {
        deleteErrors(elem);
        openPopup(elem);
    } else {
        openPopup(elem);
    };
};

function formPopupEditProfile(elem) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    if (document.querySelector('#name-input-error').classList.contains(formObject.errorClass) || document.querySelector('#job-input-error').classList.contains(formObject.errorClass)) {
        deleteInputErrors(elem);
        openPopup(elem);
    } else {
        openPopup(elem);
    };
};

function formSubmitHandler(evt) { //функция редактирования профиля
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;    
    closePopup(popup);
};

function cardSubmitHandler(evt) {
    evt.preventDefault();
    const object = {};
    object.link = addCardInput.value;
    object.name = addNameInput.value;
    const card = new Card(object, '#card-template');
    cards.prepend(card.createCards());
    closePopup(popupAdd);
};

function startValidation() {
    forms.forEach((form) => {
        const valid = new FormValidator({
            inputSelector: '.popup__input',
            submitButtonSelector: '.popup__button',
            inactiveButtonClass: 'popup__button_disabled',
            inputErrorClass: 'popup__name_type_error',
            errorClass: 'popup__input-error_visible'
        }, form);
        valid.enableValidation();
    });
};

startValidation();

popupAddButton.addEventListener('click', () => formPopupAddImage(popupAdd));
popupCloseAddForm.addEventListener('click', () => closePopup(popupAdd));
popupOpen.addEventListener('click', () => formPopupEditProfile(popupEdit));
popupClose.addEventListener('click', () => closePopup(popupEdit));
zoomBtnClose.addEventListener('click', () => closePopup(zoom));
formEdit.addEventListener('submit', formSubmitHandler);
formAdd.addEventListener('submit', cardSubmitHandler);