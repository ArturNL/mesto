import {openPopup, zoom} from './index.js';

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
        return cardElement;
    }

    createCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.card__caption').textContent = this._name;
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = this._name;
        this._setEventListeners();
        return this._element;
    }

    _imageZoom() { //увеличение изображения
        document.querySelector('.popup__image').src = this._link;
        document.querySelector('.popup__image').alt = this._name;
        document.querySelector('.popup__caption').textContent = this._name;
        openPopup(zoom);
    }

    
    _likeActive() { //ф-я для лайков
        this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }

    _deleteCard() {
        this._element.remove();
    }

    _setEventListeners() {
        this._element.querySelector('.card__image').addEventListener('click', () => this._imageZoom());
        this._element.querySelector('.card__like').addEventListener('click', () => this._likeActive());
        this._element.querySelector('.card__delete').addEventListener('click', () => this._deleteCard());
    }
}