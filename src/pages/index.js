import './index.css';
import {
  popupProfileEditButton,
  popupNewCardButton,
  nameInput,
  aboutMeInput,
  configGlobal,
  apiOptions
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

let userID;

const api = new Api(apiOptions);

function createCard(cardData) {
  const cardObject = new Card(
    cardData,
    configGlobal,
    userID,

    () => {
      popupZoomedImage.open(cardData)
    },

    evt => {
      popupDeleteCard.open(cardData,
        evt.target.closest('.gallery__item'),
        cardObject);
    },

    () => {
      cardObject.isLiked() // 8. Постановка и снятие лайка
        ? api.decrementLikesCount(cardObject.cardID)
          .then(fetchedCardData => {
            cardObject.updateLikeData(fetchedCardData);
            cardObject.renderLikesCount(fetchedCardData);
            cardObject.renderLikeState();
          })
          .catch(err => { alert(err) })
        : api.incrementLikesCount(cardObject.cardID)
          .then(fetchedCardData => {
            cardObject.updateLikeData(fetchedCardData);
            cardObject.renderLikesCount(fetchedCardData);
            cardObject.renderLikeState();
          })
          .catch(err => { alert(err) })
    });
  const cardElement = cardObject.generateCard();
  return cardElement;
}


const cardSection = new Section(
  {
    items: [],
    renderer: item => {
      const cardElement = createCard(item);
      cardSection.appendItem(cardElement);
    }
  },
  configGlobal.gallerySelector
);

api.getUserData()// 1. Загрузка информации о пользователе с сервера
  .then(({ about, avatar, name, _id }) => {
    userID = _id;
    userInfo.setUserInfo({
      userName: name,
      userAboutMe: about,
      avatarLink: avatar
    });
  })
  .catch(err => { alert(err) })
  .then(
    api.getInitialCards()// 2. Загрузка карточек с сервера
      .then(data => {
        cardSection.renderItems(data);
      })
      .catch(err => { alert(err) })
  );


const userInfo = new UserInfo(configGlobal,
  () => {
    popupAvatar.open();
  });

userInfo.setEventListeners();

const popupAvatar = new PopupWithForm(
  configGlobal.popupAvatarSelector,
  configGlobal,
  data => {
    popupAvatar.renderLoading(true);
    api.patchAvatar(data[configGlobal.nameInputProfileAvatar])//9. Обновление аватара пользователя
      .then(({ avatar }) => {
        userInfo.setUserInfo({
          userName: userInfo.userName.textContent,
          userAboutMe: userInfo.userAboutMe.textContent,
          avatarLink: avatar
        });
        popupAvatar.close();
      })
      .catch(err => { alert(err) })
      .finally(() => {
        popupAvatar.renderLoading(false);
      })
  }
)

popupAvatar.setEventListeners();

const popupProfile = new PopupWithForm(
  configGlobal.popupProfileSelector,
  configGlobal,
  data => {
    popupProfile.renderLoading(true);
    api.patchUserData(data[configGlobal.nameInputProfileName], // 3. Редактирование профиля
      data[configGlobal.nameInputProfileAboutMe])
      .then(({ name, about }) => {
        userInfo.setUserInfo({
          userName: name,
          userAboutMe: about,
          avatarLink: userInfo.avatar.src
        });
        popupProfile.close();
      })
      .catch(err => { alert(err) })
      .finally(() => {
        popupProfile.renderLoading(false);
      })
  }
);

popupProfile.setEventListeners();

popupProfileEditButton.addEventListener('click', () => {
  popupProfile.open();
  formValidators['profile-edit-form'].resetValidation();
  const { userName, userAboutMe } = userInfo.getUserInfo();
  nameInput.value = userName;
  aboutMeInput.value = userAboutMe;
});

const popupNewCard = new PopupWithForm(
  configGlobal.popupNewCardSelector,
  configGlobal,
  data => {
    popupNewCard.renderLoading(true);
    api.postNewCard(data[configGlobal.nameInputCardName], // 4. Добавление новой карточки
      data[configGlobal.nameInputCardLink])
      .then(cardData => {
        cardSection.prependItem(createCard(cardData));
        popupNewCard.close();
      })
      .catch(err => { alert(err) })
      .finally(() => {
        popupNewCard.renderLoading(false);
      })
  }
);

popupNewCard.setEventListeners();

const popupZoomedImage = new PopupWithImage(configGlobal.popupZoomInSelector, configGlobal);
popupZoomedImage.setEventListeners();

popupNewCardButton.addEventListener('click', () => {
  popupNewCard.open.bind(popupNewCard)();
  formValidators['card-add-form'].resetValidation();
});

const popupDeleteCard = new PopupWithConfirmation(
  configGlobal.popupDeleteCardSelector,
  configGlobal,
  targetData => { // 7. Удаление карточки
    popupDeleteCard.renderLoading(true);
    api.deteteCard(targetData._id)
      .then(() => {
        const targetObject = popupDeleteCard.getTargetObject();
        const targetNode = popupDeleteCard.getTargetNode();
        targetObject.removeCardNode(targetNode);
        popupDeleteCard.close();
      })
      .catch(err => { alert(err) })
      .finally(() => {
        popupDeleteCard.renderLoading(false);
      });
  });

popupDeleteCard.setEventListeners();


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
formValidators['avatar-change-form'].resetValidation();