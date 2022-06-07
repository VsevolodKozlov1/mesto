let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

function popupOpen() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', popupOpen);

let closeButton = document.querySelector('.popup__close-button');

function popupClose() {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', popupClose);
