import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, config, submitFormCallback) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
        this._config = config;
        this._form = this._popup.querySelector(this._config.formSelector);
        this._inputList = this._form.querySelectorAll(this._config.inputSelector);
        this._submit = this._popup.querySelector(this._config.submitButtonSelector);
        this._submitValue = this._submit.value;
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
          input.value = data[input.name];
        });
      }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._submitFormCallback(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        this._submit.value = isLoading ? 'Сохранение...' : this._submitValue;
    }
}