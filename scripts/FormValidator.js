export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._allInputsOfCurrentForm = Array.from(this._formElement
            .querySelectorAll(this._config.inputSelector));
        this._submitOfCurrentForm = this._formElement
            .querySelector(this._config.submitButtonSelector);
    }

    _toggleInvalidInput(input, isValid, invalidClass) {
        if (isValid) {
            input.classList.remove(invalidClass);
        } else {
            input.classList.add(invalidClass);
        };
    }

    _isInputValid = el => el.validity.valid;

    _isFormValid() {
        return this._allInputsOfCurrentForm.every(el => this._isInputValid(el));
    }

    _toggleSubmitAvailability(submitButton, shouldBeAvailable) {
        if (shouldBeAvailable) {
            submitButton.removeAttribute('disabled');
            submitButton.classList.add('button-hover');
        } else {
            submitButton.setAttribute('disabled', '');
            submitButton.classList.remove('button-hover');
        };
    };

    enableValidation() {
        this._allInputsOfCurrentForm.forEach(currentInput => {
            const errorSpanSelector = `.${this._config.spanErrorClass}_${currentInput.name}`;
            const errorSpan = document.querySelector(errorSpanSelector);

            currentInput.addEventListener('input', () => {
                errorSpan.textContent = currentInput.validationMessage;
                this._toggleInvalidInput(currentInput,
                    this._isInputValid(currentInput),
                    this._config.inputInvalidClass);
                this._toggleSubmitAvailability(this._submitOfCurrentForm,
                    this._isFormValid());
            })
        });
    };
}