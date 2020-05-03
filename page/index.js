// блок popup
const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close-icon');
const popupSave = popup.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__name');
const jobInput = formElement.querySelector('.popup__text');
// блок popup-add
const popupAdd = document.querySelector('.popup-add');
const popupAddButton = document.querySelector('.profile__add-button');
const popupCloseAddForm = popupAdd.querySelector('.popup-add__close-icon');
const popupSaveAdd = popupAdd.querySelector('.popup-add__button');
const elementName = document.querySelector('.element__caption');
const elementCard = document.querySelector('.element__image');
const formAddElement = document.querySelector('.popup-add__container');
const addNameInput = formAddElement.querySelector('.popup-add__name');
const addCardInput = formAddElement.querySelector('.popup-add__link');

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

// функция popup
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.innerHTML = `${nameInput.value}`;
    profileJob.innerHTML = `${jobInput.value}`;    
    popupOff();
}

popupOpen.addEventListener('click', popupOn);
popupClose.addEventListener('click', popupOff);
formElement.addEventListener('submit', formSubmitHandler);
popupSave.addEventListener('click', formSubmitHandler);

//функция popup-add
//function formAddSubmitHandler(evt) {
  //  evt.preventDefault();
   // elementName.innerHTML = `${addNameInput.value}`;
  //  elementCard.innerHTML = `${addCardInput.value}`;
  //  popupOff();
//}

popupAddButton.addEventListener('click', popupOnCreate);
popupCloseAddForm.addEventListener('click', popupOff);
//formAddElement.addEventListener('submit', formAddSubmitHandler);
//popupSaveAdd.addEventListener('click', formAddSubmitHandler);


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

elementItem.querySelector('.element__image-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('.element__image-like_active');
});