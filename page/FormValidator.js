export class FormValidator {
    constructor(object, form) {
        this._formSelector = object.formSelector;
        this._inputSelector = object.inputSelector;
        this._submitButtonSelector = object.submitButtonSelector;
        this._inactiveButtonClass = object.inactiveButtonClass;
        this._inputErrorClass = object.inputErrorClass;
        this._errorClass = object.errorClass;
        this._form  = form;
    };

    _showInputError = (inputElement, errorMessage) => { // ф-я добаления класса ошибки
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (inputElement) => { //ф-я удаления класса с ошибкой
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _isValid(inputElement) { //ф-я проверки валидности
        if(!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState(inputList, buttonElement) { //ф-я активации кнопок
        if(this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    };

    _setEventListeners() { // Слушатели
        const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        const buttonElement = this._form.querySelector(this._submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._toggleButtonState(inputList, buttonElement);
                this._isValid(inputElement);
            });
        });
    };

    enableValidation() {
        this._form.addEventListener('submit', (evt) => evt.preventDefault);
        this._setEventListeners();
    };
}