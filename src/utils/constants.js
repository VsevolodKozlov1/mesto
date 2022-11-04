//кнопки
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupNewCardButton = document.querySelector('.profile__add-button');

//инпуты
const nameInput = document.querySelector('.popup__input_personal-data_name');
const aboutMeInput = document.querySelector('.popup__input_personal-data_about-me');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const configGlobal = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  nameInputProfileName: 'personal-data_name',
  nameInputProfileAboutMe: 'personal-data_about-me',
  nameInputCardName: 'card_name',
  nameInputCardLink: 'card_link',
  submitButtonSelector: '.popup__submit',
  popupProfileSelector: '.popup_section_profile',
  popupNewCardSelector: '.popup_section_gallery',
  popupZoomInSelector: '.popup_section_zoom-in',
  cardTemplateSelector: '.gallery-item-template',
  gallerySelector: '.gallery',
  userNameSelector: '.profile__name',
  userAboutMeSelector: '.profile__about-me',
  zoomedPhotoSelector: '.popup__photo',
  zoomedCaptionSelector: '.popup__caption',
  inputInvalidClass: 'popup__input_invalid',
  spanErrorClass: 'popup__span-error',
  buttonHoverClass: 'button-hover'
}

export { 
  popupProfileEditButton,
  popupNewCardButton,
  nameInput,
  aboutMeInput,
  initialCards,
  configGlobal
};