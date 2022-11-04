export default class Card {
    constructor(cardData, config, handleCardClick) {
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
        this._handleCardClick = handleCardClick;
    }

    _createCardText() {
        this._cardItem
            .querySelector('.gallery__item-descr')
            .textContent = this._cardData.name;
    }

    _createCardPhoto() {
        this._cardPhoto.src = this._cardData.link;
        this._cardPhoto.alt = this._cardData.name;
    }

    _toggleLikeButton() {
        this._likeButton.classList.toggle('gallery__like-button_active');
    }

    _removeCardItem() {
        this._cardItem.remove();
        this._cardItem = null;
    }

    _setEventListeners() {
        this._cardPhoto.addEventListener('click', this._handleCardClick);
        this._likeButton.addEventListener('click', this._toggleLikeButton.bind(this));
        this._delButton.addEventListener('click', this._removeCardItem.bind(this));
    }

    generateCard() {
        this._createCardText();
        this._createCardPhoto();
        this._setEventListeners();
        return this._cardItem;
    }
}