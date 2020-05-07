const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');
const formEdit = document.querySelector('.popup__container');
const nameInput = formEdit.querySelector('.popup__name');
const jobInput = formEdit.querySelector('.popup__text');
const popupAdd = document.querySelector('#popup-add');
const card = document.querySelector('.card');
const popupAddButton = document.querySelector('.profile__add-button');
const popupCloseAddForm = popupAdd.querySelector('#popup-add__close');
const formAdd = document.querySelector('#popup-add__container');
const addNameInput = formAdd.querySelector('#popup-add__name');
const addCardInput = formAdd.querySelector('#popup-add__link');
const cardTemplate = document.querySelector('#card-template').content;
const zoom = document.querySelector('#popup-zoom');
const zoomBtnClose = zoom.querySelector('.popup__close-icon-zoom');
const zoomName = zoom.querySelector('.popup__caption');
const zoomImage = zoom.querySelector('.popup__image');

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

//функция открыть-закрыть popup
function popupToggle(form) {
    form.classList.toggle('popup_opened');
}

//функция редактирования профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;    
    popupToggle(popup);
}

function popupEditForm() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupToggle(popup);
}

//ф-я для лайков
function likeActive(evt) {
    evt.target.classList.toggle('card__like_active');
}

//ф-я для удаления
function cardDelete(evt) {
    const removeCard = evt.target.closest('.card__container');
    
    const cardLike = removeCard.querySelector('.card__like');
    cardLike.removeEventListener('click', likeActive);

    const deleteBtn = removeCard.querySelector('.card__delete');
    deleteBtn.removeEventListener('click', cardDelete);

    const zoomImageCard = removeCard.querySelector('.card__image');
    zoomImageCard.removeEventListener('click', imageZoom);

    removeCard.remove();
}

//ф-я увелеичения изображения
function imageZoom(evt) {
    zoomName.textContent = evt.target.alt;
    zoomImage.src = evt.target.src;
    zoomImage.alt = evt.target.alt;
    popupToggle(zoom);
}

function createCards(name, image) {
    const cardItem = cardTemplate.cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const cardLike = cardItem.querySelector('.card__like');
    const deleteBtn = cardItem.querySelector('.card__delete');
    cardImage.alt = name;
    cardImage.src = image;
    cardItem.querySelector('.card__caption').textContent = name;
    
    cardLike.addEventListener('click', likeActive);
    deleteBtn.addEventListener('click', cardDelete);
    cardImage.addEventListener('click', imageZoom);
    
    return cardItem;
}

function cardInitial() {
    initialCards.forEach(({name, link}) => card.append(createCards(name, link)));    
}

function cardSubmitHandler(evt) {
    evt.preventDefault();
    card.prepend(createCards(addNameInput.value, addCardInput.value));
    addNameInput.value = '';
    addCardInput.value = '';
    popupToggle(popupAdd);
}

popupOpen.addEventListener('click', popupEditForm);
popupClose.addEventListener('click', () => popupToggle(popup));
formEdit.addEventListener('submit', formSubmitHandler);

formAdd.addEventListener('submit', cardSubmitHandler);
zoomBtnClose.addEventListener('click', () => popupToggle(zoom));
popupAddButton.addEventListener('click', () => popupToggle(popupAdd));
popupCloseAddForm.addEventListener('click', () => popupToggle(popupAdd));

cardInitial();