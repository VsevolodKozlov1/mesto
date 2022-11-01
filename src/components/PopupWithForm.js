import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, config, submitFormCallback) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
        this._config = config;
    }

    _getInputValues() {
        const inputValues = {};
        this._popup
            .querySelectorAll(this._config.inputSelector)
            .forEach(input => {
                inputValues[input.name] = input.value;
            });
        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup
            .querySelector(this._config.formSelector)
            .addEventListener('submit', this._submitFormCallback);
    }

    close() {
        super.close();
        this._popup
            .querySelector(this._config.formSelector)
            .removeEventListener('submit', this._submitFormCallback);
        this._popup
            .querySelector(this._config.formSelector)
            .reset();
    }
}