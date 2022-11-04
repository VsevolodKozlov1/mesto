import './index.css';
import {
  popupProfileEditButton,
  popupNewCardButton,
  nameInput,
  aboutMeInput,
  initialCards,
  configGlobal
} from '../utils/constants.js';
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

const popupProfile = new PopupWithForm(
  configGlobal.popupProfileSelector,
  configGlobal,
  data => {
    userInfo.setUserInfo({
      userName: data[configGlobal.nameInputProfileName],
      userAboutMe: data[configGlobal.nameInputProfileAboutMe]
    });
    popupProfile.close();
  }
);

popupProfile.setEventListeners();

popupProfileEditButton.addEventListener('click', () => {
  popupProfile.open.bind(popupProfile)();
  formValidators['profile-edit-form'].resetValidation();
  const { userName, userAboutMe } = userInfo.getUserInfo();//Перенес инициацию инпутов в обработчик открытия.
  nameInput.value = userName;//Не сообразил, как в методе setInputValues(data) сопоставить input с 
  aboutMeInput.value = userAboutMe;//соответствующим полем профиля в цикле без указания вручную.
}
);

const popupNewCard = new PopupWithForm(
  configGlobal.popupNewCardSelector,
  configGlobal,
  data => {
    const cardData = [{
      link: data[configGlobal.nameInputCardLink],
      name: data[configGlobal.nameInputCardName]
    }];
    cardSection.renderItems(cardData);

    popupNewCard.close();
  }
);

popupNewCard.setEventListeners();

function createCard(cardData) {
  const cardObject = new Card(
      cardData,
      configGlobal,
      () => {
          popupZoomedImage.open(cardData)
      }
  );
  const cardElement = cardObject.generateCard();
  return cardElement;
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    }
  },
  configGlobal.gallerySelector
)

cardSection.renderItems(cardSection._items);

const popupZoomedImage = new PopupWithImage(configGlobal.popupZoomInSelector, configGlobal);
popupZoomedImage.setEventListeners();

popupNewCardButton.addEventListener('click', () => {
  popupNewCard.open.bind(popupNewCard)();
  formValidators['card-add-form'].resetValidation();
});

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(configGlobal);

formValidators['profile-edit-form'].resetValidation();
formValidators['card-add-form'].resetValidation();