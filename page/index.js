const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close-icon');
const popupSave = popup.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__name');
const jobInput = formElement.querySelector('.popup__text');

function popupOn() {
    popup.classList.remove('popup_opened');
}

function popupOff() {
    popup.classList.add('popup_opened');
}

popupOpen.addEventListener('click', popupOn);
popupClose.addEventListener('click', popupOff);

function formEditProfile() {
    profileName.innerHTML = `${nameInput.value}`;
    profileJob.innerHTML = `${jobInput.value}`;
    
    popupOff();
}

popupSave.addEventListener('click', formEditProfile);

function loadProfileInPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

loadProfileInPopup();