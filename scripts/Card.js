import zoomIn from './index.js';

export default class Card {
    constructor(cardData, cardTemplateSelector) {
        this._cardData = cardData;
        this._cardTemplateSelector = cardTemplateSelector;
        this._cardItem = document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.gallery__item')
            .cloneNode(true);
        this._cardPhoto = this._cardItem.querySelector('.gallery__photo');
        this._likeButton = this._cardItem.querySelector('.gallery__like-button');
        this._delButton = this._cardItem.querySelector('.gallery__del-button');
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
            zoomIn(this._cardData);
        });
    }

    _listenLikeButton() {
        this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('gallery__like-button_active');
            });
    }

    _listenDelButton() {
        this._delButton.addEventListener('click', () => {
            this._cardItem.remove();
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