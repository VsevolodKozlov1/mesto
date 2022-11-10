import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, config, submitFormCallback) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
        this._config = config;
        this._form = this._popup.querySelector(this._config.formSelector);
        this._submit = this._popup.querySelector(this._config.submitButtonSelector);
        this._targetData;
    }

    open(targetData) {
        super.open();
        this._targetData = targetData;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._submitFormCallback(this._targetData);
        });
    }
}