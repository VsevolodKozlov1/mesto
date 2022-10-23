import {
  openPopup,
  initiateInput,
  closePopup,
  editProfileData,
  closeByEsc
} from './utils/utils.js';
import { initialCards, configGlobal } from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ >>>
//разделы профиля "Имя" и "О себе"
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');

//элементы шаблона карточки
const galleryItemTemplate = document.querySelector('.gallery-item-template').content;
const galleryItem = galleryItemTemplate.querySelector('.gallery__item');

//раздел "Галерея", куда будем вставлять карточки
const gallery = document.querySelector('.gallery');

//кнопки
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupNewCardButton = document.querySelector('.profile__add-button');

//попапы
const allPopups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_section_profile');
const popupGallery = document.querySelector('.popup_section_gallery');
const popupZoomIn = document.querySelector('.popup_section_zoom-in');

//формы
const allForms = document.querySelectorAll('.popup__form');
const formProfile = document.querySelector('.popup__form_section_profile');
const formGallery = document.querySelector('.popup__form_section_gallery');

//инпуты
const allInputs = document.querySelectorAll('.popup__input');
const nameInput = document.querySelector('.popup__input_personal-data_name');
const aboutMeInput = document.querySelector('.popup__input_personal-data_about-me');
const cardNameInput = document.querySelector('.popup__input_card_name');
const cardLinkInput = document.querySelector('.popup__input_card_link');

//сабмиты
const allSubmits = document.querySelectorAll('.popup__submit');
const profileSubmit = document.querySelector('.popup__submit_section_profile');
const gallerySubmit = document.querySelector('.popup__submit_section_gallery');

//<<< ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ

//ПРИВЯЗКА СЛУШАТЕЛЕЙ СОБЫТИЙ >>>
popupProfileOpenButton.addEventListener('click', () => { //кнопка редактирования профиля
  openPopup(popupProfile);
  initiateInput(nameInput, profileName);
  initiateInput(aboutMeInput, profileAboutMe);
});

popupNewCardButton.addEventListener('click', () => { //кнопка добавления карточки
  openPopup(popupGallery);
  gallerySubmit.setAttribute('disabled', '');
});

allPopups.forEach((popup) => { //закрытие попапов по клику по оверлею или по крестику
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    };
  });
});

formProfile.addEventListener('submit', editProfileData); //сабмит редактирования профиля
formGallery.addEventListener('submit', evt => { //сабмит добавления карточки
  evt.preventDefault();
  const cardData = {
    link: cardLinkInput.value,
    name: cardNameInput.value
  };
  const card = new Card(cardData, configGlobal);
  gallery.prepend(card.generateCard());
  evt.target.reset();
  closePopup(popupGallery);
});
//<<< ПРИВЯЗКА СЛУШАТЕЛЕЙ СОБЫТИЙ

initialCards.forEach(cardData => { //создание всех карточек из первоначального массива
  const card = new Card(cardData, configGlobal);
  gallery.prepend(card.generateCard());
});

//инстанцирование экземпляров класса FormValidator и активация валидации для них в global scope
const formProfileValidation = new FormValidator(configGlobal, formProfile);
formProfileValidation.enableValidation();

const formGalleryValidation = new FormValidator(configGlobal, formGallery);
formGalleryValidation.enableValidation();