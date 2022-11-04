import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, config) {
        super(popupSelector);
        this._zoomedPhoto = this._popup.querySelector(config.zoomedPhotoSelector);
        this._zoomedCaption = this._popup.querySelector(config.zoomedCaptionSelector);
    }

    open(card) {
        super.open();
        this._zoomedPhoto.src = card.link;
        this._zoomedPhoto.alt = card.name;
        this._zoomedCaption.textContent = card.name;
    }
}