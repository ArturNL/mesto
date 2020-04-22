const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close-icon');
const popupSave = popup.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__name');
const jobInput = formElement.querySelector('.popup__text');
const popupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const popupCloseAddForm = popupAdd.querySelector('.popup-add__close-icon');

function popupOn() {
    popup.classList.remove('popup_opened');
}

function popupOnCreate() {
    popupAdd.classList.remove('popup-add_opened');
}

function popupOff() {
    popup.classList.add('popup_opened');
    popupAdd.classList.add('popup-add_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.innerHTML = `${nameInput.value}`;
    profileJob.innerHTML = `${jobInput.value}`;    
    popupOff();
}

popupOpen.addEventListener('click', popupOn);
popupClose.addEventListener('click', popupOff);
popupAddButton.addEventListener('click', popupOnCreate);
popupCloseAddForm.addEventListener('click', popupOff);
formElement.addEventListener('submit', formSubmitHandler);
popupSave.addEventListener('click', formSubmitHandler);