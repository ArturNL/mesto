const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = popup.querySelector('.popup__close-icon');
const popupSave = popup.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');
const formEdit = document.querySelector('.popup__container');
const nameInput = formEdit.querySelector('.popup__name');
const jobInput = formEdit.querySelector('.popup__text');
const popupAdd = document.querySelector('.popup-add');
const element = document.querySelector('.element');
const popupAddButton = document.querySelector('.profile__add-button');
const popupCloseAddForm = popupAdd.querySelector('.popup-add__close-icon');
const formAdd = document.querySelector('.popup-add__container');
const addNameInput = formAdd.querySelector('.popup-add__name');
const addCardInput = formAdd.querySelector('.popup-add__link');
const elementTemplate = document.querySelector('#element-template').content;
const zoom = document.querySelector('.popup-zoom');
const zoomBtnClose = zoom.querySelector('.popup-zoom__close-icon');
const zoomName = zoom.querySelector('.popup-zoom__name');
const zoomImage = zoom.querySelector('.popup-zoom__image');

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
    popupToggle(popup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

popupOpen.addEventListener('click', popupEditForm);
popupClose.addEventListener('click', () => popupToggle(popup));
formEdit.addEventListener('submit', formSubmitHandler);

function createCards(name, image) {
    const elementItem = elementTemplate.cloneNode(true);
    elementItem.querySelector('.element__image').src = image;
    elementItem.querySelector('.element__image').alt = name;
    elementItem.querySelector('.element__caption').textContent = name;
    //Лайки
    elementItem.querySelector('.element__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like_active');
    });
    //Удаление карточек
    elementItem.querySelector('.element__delete').addEventListener('click', function(evt) {
        evt.target.parentElement.classList.add('element__delete_active');
    });
    elementItem.querySelector('.element__image').addEventListener('click', function(evt) {
        popupToggle(zoom);
        zoomName.textContent = name;
        zoomImage.src = evt.target.src;
        zoomImage.alt = name;
    });
    return elementItem;
}

initialCards.forEach(function (card) {
    element.append(createCards(card.name, card.link));
})

function cardSubmitHandler(evt) {
    evt.preventDefault();
    element.prepend(createCards(addNameInput.value, addCardInput.value));
    popupToggle(popupAdd);
    addNameInput.value = '';
    addCardInput.value = '';
}

formAdd.addEventListener('submit', cardSubmitHandler);
zoomBtnClose.addEventListener('click', () => popupToggle(zoom));
popupAddButton.addEventListener('click', () => popupToggle(popupAdd));
popupCloseAddForm.addEventListener('click', () => popupToggle(popupAdd));