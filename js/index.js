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


let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let aboutMeInput = document.querySelector('.popup__input_about-me');
let profileName = document.querySelector('.profile__name');
let profileAboutMe = document.querySelector('.profile__about-me');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMe.textContent = aboutMeInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);