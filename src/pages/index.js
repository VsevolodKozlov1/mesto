import './index.css';
import {
  popupProfileEditButton,
  popupNewCardButton,
  formProfile,
  formGallery,
  nameInput,
  aboutMeInput,
  cardNameInput,
  cardLinkInput,
  gallerySubmit,
  initialCards,
  configGlobal
} from '../components/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js'

const userInfo = new UserInfo({
  userNameSelector: configGlobal.userNameSelector,
  userAboutMeSelector: configGlobal.userAboutMeSelector
});

popupProfileEditButton.addEventListener('click', () => {
  const popup = new PopupWithForm(
    configGlobal.popupProfileSelector,
    configGlobal,
    evt => {
      evt.preventDefault();
      userInfo.setUserInfo({
        userName: nameInput.value,
        userAboutMe: aboutMeInput.value
      });
      popup.close();
    });
  popup.open();
  popup.setEventListeners();
  nameInput.value = userInfo.getUserInfo().userName;
  aboutMeInput.value = userInfo.getUserInfo().userAboutMe;
});

popupNewCardButton.addEventListener('click', () => {
  const popup = new PopupWithForm(
    configGlobal.popupNewCardSelector,
    configGlobal,
    evt => {
      evt.preventDefault();
      const cardData = [{
        link: cardLinkInput.value,
        name: cardNameInput.value
      }];

      const cardSection = new Section({
        items: cardData,
        renderer: (item) => {
          const card = new Card(item, configGlobal, () => {
            const popup = new PopupWithImage(
              card._popupZoomInSelector,
              card._cardData,
              configGlobal);
            popup.open();
            popup.setEventListeners();
          });
          const cardElement = card.generateCard();
          cardSection.addItem(cardElement);
        }
      }, configGlobal.gallerySelector);

      cardSection.renderItems();
      popup.close();
    }
  )
  popup.open();
  popup.setEventListeners();
  gallerySubmit.setAttribute('disabled', '');
});

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, configGlobal, () => {
      const popup = new PopupWithImage(
        card._popupZoomInSelector,
        card._cardData,
        configGlobal);
      popup.open();
      popup.setEventListeners();
    });
    const cardElement = card.generateCard();
    cardSection.addItem(cardElement);
  }
}, configGlobal.gallerySelector);

cardSection.renderItems();

const formProfileValidation = new FormValidator(configGlobal, formProfile);
formProfileValidation.enableValidation();

const formGalleryValidation = new FormValidator(configGlobal, formGallery);
formGalleryValidation.enableValidation();