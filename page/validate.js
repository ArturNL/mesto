const formObject = { //Проверка элементов
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__name_type_error',
    errorClass: 'popup__input-error_visible'
};
// ф-я добаления класса ошибки
const showInputError = (formElement, inputElement, errorMessage, form) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(form.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(form.errorClass);
};
//ф-я удаления класса с ошибкой
const hideInputError = (formElement, inputElement, form) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(form.inputErrorClass);
    errorElement.classList.remove(form.errorClass);
    errorElement.textContent = '';
};
//ф-я проверки валидности
const isValid = (formElement, inputElement, form) => {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, form);
    } else {
        hideInputError(formElement, inputElement, form);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};
//ф-я активации кнопок
const toggleButtonState = (inputList, buttonElement, form) => {
    if(hasInvalidInput(inputList)) {
        buttonElement.classList.add(form.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(form.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};
// Слушатели
const setEventListeners = (formElement, form) => {
    const inputList = Array.from(formElement.querySelectorAll(form.inputSelector));
    const buttonElement = formElement.querySelector(form.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, form);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            toggleButtonState(inputList, buttonElement, form);
            isValid(formElement, inputElement, form);
        });
    });
};

const enableValidation = (form) => {
    const formList = Array.from(document.querySelectorAll(form.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, form);
    });
};

enableValidation(formObject);