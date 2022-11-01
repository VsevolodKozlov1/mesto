import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, card, config) {
        super(popupSelector);
        this._card = card;
        this._zoomedPhoto = document.querySelector(config.zoomedPhotoSelector);
        this._zoomedCaption = document.querySelector(config.zoomedCaptionSelector);
    }

    open() {
        super.open();
        this._zoomedPhoto.src = this._card.link;
        this._zoomedPhoto.alt = this._card.name;
        this._zoomedCaption.textContent = this._card.name;
    }
}