import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, config, submitFormCallback) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
        this._config = config;
        this._form = this._popup.querySelector(this._config.formSelector);
        this._submit = this._popup.querySelector(this._config.submitButtonSelector);
        this._submitValue = this._submit.value;
        this._targetData;
        this._targetNode;
    }

    open(targetData, targetNode) {
        this._targetData = targetData;
        this._targetNode = targetNode;
        super.open();
    }

    removeTargetNode() {
        this._targetNode.remove();
        this._targetNode = null;
    }

    renderLoading(isLoading) {
        this._submit.value = isLoading ? 'Выполняем...' : this._submitValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._submitFormCallback(this._targetData);
        });
    }
}