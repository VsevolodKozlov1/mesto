//объект настроек
const configGlobal = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inputInvalidClass: 'popup__input_invalid',
    spanErrorClass: 'popup__span-error'
};

//ф-я включения/выключения невалидного инпута
const toggleInvalidInput = (input, isValid, invalidClass) => {
    if (isValid) {
        input.classList.remove(invalidClass);
    } else {
        input.classList.add(invalidClass);
    };
};

//ф-я проверки валидности формы
const formValidityCheck = formInputs => formInputs.every(({ validity }) => validity.valid);

//ф-я активации/деактивации кнопки отправки формы
const toggleSubmitAvailability = (submitButton, shouldBeAvailable) => {
    if (shouldBeAvailable) {
        submitButton.removeAttribute('disabled');
        submitButton.classList.add('button-hover');
    } else {
        submitButton.setAttribute('disabled', '');
        submitButton.classList.remove('button-hover');
    };
};

//общая ф-я валидации по всем инпутам
enableValidation = (config) => {
    allInputs.forEach(currentInput => {
        const errorSpanSelector = `.${config.spanErrorClass}_${currentInput.name}`;
        const errorSpan = document.querySelector(errorSpanSelector);

        currentInput.addEventListener('input', evt => {
            errorSpan.textContent = currentInput.validationMessage;
            const isInputValid = currentInput.validity.valid;
            
            toggleInvalidInput(currentInput, isInputValid, config.inputInvalidClass);

            const allInputsOfCurrentForm = Array.from(currentInput
                .closest(config.formSelector)
                .querySelectorAll(config.inputSelector));
            const currentSubmit = currentInput
                .closest(config.formSelector)
                .querySelector(config.submitButtonSelector);

            toggleSubmitAvailability(currentSubmit, formValidityCheck(allInputsOfCurrentForm));
        });
    });
};

//вызов ф-и валидации
enableValidation(configGlobal);

