import { zoomIn } from './utils/utils.js';

export default class Card {
    constructor(cardData, config) {
        this._cardData = cardData;
        this._cardTemplateSelector = config.cardTemplateSelector;
        this._cardItem = document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.gallery__item')
            .cloneNode(true);
        this._cardPhoto = this._cardItem.querySelector('.gallery__photo');
        this._likeButton = this._cardItem.querySelector('.gallery__like-button');
        this._delButton = this._cardItem.querySelector('.gallery__del-button');
        this._popupZoomInSelector = config.popupZoomInSelector;
    }

    _createCardText() {
        this._cardItem
            .querySelector('.gallery__item-descr')
            .textContent = this._cardData.name;
    }

    _createCardPhoto() {
        this._cardPhoto.src = this._cardData.link;
        this._cardPhoto.alt = this._cardData.name;
        this._cardPhoto.addEventListener('click', () => {
            zoomIn(this._cardData, this._popupZoomInSelector);
        });
    }

    _toggleLikeButton() {
        this._likeButton.classList.toggle('gallery__like-button_active');
    }

    _listenLikeButton() {
        this._likeButton.addEventListener('click', () => {
            this._toggleLikeButton();
        });
    }

    _removeCardItem() {
        this._cardItem.remove();
        this._cardItem.innerHTML = '';
    }

    _listenDelButton() {
        this._delButton.addEventListener('click', () => {
            this._removeCardItem();
        });
    }

    generateCard() {
        this._createCardText();
        this._createCardPhoto();
        this._listenLikeButton();
        this._listenDelButton();
        return this._cardItem;
    }
}