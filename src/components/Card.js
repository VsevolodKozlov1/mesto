export default class Card {
    constructor(
        cardData,
        config,
        handleCardClick,
        handleDeletion,
        handleLike,
        // api
    ) {
        this._cardData = cardData;
        this._config = config;
        this._cardTemplateSelector = config.cardTemplateSelector;
        this._cardItem = document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.gallery__item')
            .cloneNode(true);
        this._cardPhoto = this._cardItem.querySelector('.gallery__photo');
        this._likeButton = this._cardItem.querySelector('.gallery__like-button');
        this._delButton = this._cardItem.querySelector('.gallery__del-button');
        this.likeCounter = this._cardItem.querySelector('.gallery__like-counter');
        this.likes = cardData.likes;
        this.cardID = cardData._id;
        this._userID = cardData.userID;
        this._ownerID = cardData.owner._id;
        this._popupZoomInSelector = config.popupZoomInSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeletion = handleDeletion;
        this._handleLike = handleLike;
        this._idsWhoLiked = [];
    }

    _createCardText() {
        this._cardItem
            .querySelector('.gallery__item-descr')
            .textContent = this._cardData.name;
    }

    _createCardPhoto() {
        this._cardPhoto.src = this._cardData.link;
        this._cardPhoto.alt = this._cardData.name;
        this.likeCounter.textContent = this.likes.length;
    }

    _isYours() {
        if (this._userID !== this._ownerID) {
            this._delButton.remove();
            return false;
        }
        return true;
    }

    isLiked() {
        this.likes.forEach(likeObject => {
            this._idsWhoLiked.push(likeObject._id);
        });
        if (this._idsWhoLiked.indexOf(this._userID) === -1) {
            this._idsWhoLiked = [];
            return false;
        }
        this._idsWhoLiked = [];
        return true;
    }

    _setEventListeners() {
        this._cardPhoto.addEventListener('click', this._handleCardClick);
        this._likeButton.addEventListener('click', this._handleLike);
        this._isYours() && this._delButton.addEventListener('click', evt => {
            this._handleDeletion(evt);
        });
    }

    defineLikeState() {
        if (this.isLiked()) {
            this._likeButton.classList.add('gallery__like-button_active')
        } else {
            this._likeButton.classList.remove('gallery__like-button_active')
        }
    }

    generateCard() {
        this._createCardText();
        this._createCardPhoto();
        this.defineLikeState();
        this._setEventListeners();
        return this._cardItem;
    }

    removeThisCard() {
        this._cardItem.remove();
    }
}