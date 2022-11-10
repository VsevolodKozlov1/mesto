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
let cardToDelete;

const api = new Api(apiOptions);

function createCard(cardData) {
  const cardObject = new Card(
    cardData,
    configGlobal,

    () => {
      popupZoomedImage.open(cardData)
    },

    evt => {
      cardToDelete = evt.target.closest('.gallery__item');
      popupDeleteCard.open(cardData);
    },

    () => {
      if (cardObject.isLiked()) { // 8. Постановка и снятие лайка
        api.decrementLikesCount(cardObject.cardID)
          .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)))
          .catch(err => Promise.reject(err))
          .then(fetchedCardData => {
            cardObject.likes = fetchedCardData.likes;
            cardObject.likeCounter.textContent = cardObject.likes.length;
            cardObject.defineLikeState();
          })
          .catch(err => { console.log(err) })
      } else {
        api.incrementLikesCount(cardObject.cardID)
          .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)))
          .catch(err => Promise.reject(err))
          .then(fetchedCardData => {
            cardObject.likes = fetchedCardData.likes;
            cardObject.likeCounter.textContent = cardObject.likes.length;
            cardObject.defineLikeState();
          })
          .catch(err => { console.log(err) })
      }
    });
  const cardElement = cardObject.generateCard();
  return cardElement;
}


const cardSection = new Section(
  {
    items: [],
    renderer: item => {
      item.userID = userID;
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    }
  },
  configGlobal.gallerySelector
);

api.getUserData()// 1. Загрузка информации о пользователе с сервера
  .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)))
  .catch(err => Promise.reject(err))
  .then(({ about, avatar, name, _id }) => {
    userID = _id;
    userInfo.setUserInfo({
      userName: name,
      userAboutMe: about,
      avatarLink: avatar
    });
  })
  .catch(err => { console.log(err) })
  .then(
    api.getInitialCards()// 2. Загрузка карточек с сервера
      .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)))
      .catch(err => Promise.reject(err))
      .then(data => {
        cardSection.renderItems(data);
      })
      .catch(err => { console.log(err) })
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
      .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)))
      .catch(err => {
        console.log(err);
        Promise.reject(err)
      })
      .then(({ avatar }) => {
        userInfo.setUserInfo({
          userName: userInfo.userName.textContent,
          userAboutMe: userInfo.userAboutMe.textContent,
          avatarLink: avatar
        });
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        popupAvatar.renderLoading(false);
        popupAvatar.close()
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
      .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)))
      .catch(err => Promise.reject(err))
      .then(({ name, about }) => {
        userInfo.setUserInfo({
          userName: name,
          userAboutMe: about,
          avatarLink: userInfo.avatar.src
        });
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        popupProfile.renderLoading(false);
        popupProfile.close()
      })
  }
);

popupProfile.setEventListeners();

popupProfileEditButton.addEventListener('click', () => {
  popupProfile.open.bind(popupProfile)();
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
      .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)))
      .catch(err => Promise.reject(err))
      .then(({ name, link, likes, owner }) => {
        cardSection.addItem(createCard({ name, link, likes, owner, userID }))
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        popupNewCard.renderLoading(false);
        popupNewCard.close()
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
    api.deteteCard(targetData._id)
      .then(res => res.ok ? res.json() : Promise.reject(new Error(res.status)))
      .catch(err => Promise.reject(err))
      .then(() => {
        cardToDelete.remove();
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        popupDeleteCard.close()
      })
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