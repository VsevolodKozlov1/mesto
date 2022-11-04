export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._allInputsOfCurrentForm = Array.from(this._formElement
            .querySelectorAll(this._config.inputSelector));
        this._submitOfCurrentForm = this._formElement
            .querySelector(this._config.submitButtonSelector);
        this._buttonHoverClass = config.buttonHoverClass;
    }

    _toggleInvalidInput(inputElement, isValid, invalidClass) {
        if (isValid) {
            inputElement.classList.remove(invalidClass);
        } else {
            inputElement.classList.add(invalidClass);
        };
    }

    _isInputValid = el => el.validity.valid;

    _isFormValid() {
        return this._allInputsOfCurrentForm.every(el => this._isInputValid(el));
    }

    _toggleSubmitAvailability(submitButton, shouldBeAvailable) {
        if (shouldBeAvailable) {
            submitButton.removeAttribute('disabled');
            submitButton.classList.add(this._buttonHoverClass);
        } else {
            submitButton.setAttribute('disabled', '');
            submitButton.classList.remove(this._buttonHoverClass);
        };
    }

    _hideError(inputElement) {
        inputElement.classList.remove(this._config.inputInvalidClass);
        const errorSpanSelector = `.${this._config.spanErrorClass}_${inputElement.name}`;
        const errorSpan = this._formElement.querySelector(errorSpanSelector);
        errorSpan.textContent = '';
    }

    enableValidation() {
        this._allInputsOfCurrentForm.forEach(currentInput => {
            const errorSpanSelector = `.${this._config.spanErrorClass}_${currentInput.name}`;
            const errorSpan = this._formElement.querySelector(errorSpanSelector);

            currentInput.addEventListener('input', () => {
                errorSpan.textContent = currentInput.validationMessage;
                this._toggleInvalidInput(currentInput,
                    this._isInputValid(currentInput),
                    this._config.inputInvalidClass);
                this._toggleSubmitAvailability(this._submitOfCurrentForm,
                    this._isFormValid());
            });
        });
    }

    resetValidation() {
        this._toggleSubmitAvailability(this._submitOfCurrentForm, false);
        this._allInputsOfCurrentForm.forEach((inputElement) => {
            this._hideError(inputElement);
        });
    }
}