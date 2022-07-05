//ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ >>>
//разделы профиля "Имя" и "О себе"
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');

//раздел "Галерея", куда будем вставлять карточки
const gallery = document.querySelector('.gallery');

//кнопки
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button'); //кнопка закрытия универсальная для всех попапов

//попапы
const popupProfile = document.querySelector('.popup_section_profile');
const popupGallery = document.querySelector('.popup_section_gallery');
const popupZoomIn = document.querySelector('.popup_section_zoom-in');

//элементы шаблона карточки
const galleryItemTemplate = document.querySelector('.gallery-item-template').content;
const galleryItem = galleryItemTemplate.querySelector('.gallery__item');

//формы редактирования профиля и добавления карточки
const formProfile = document.querySelector('.popup__form_section_profile');
const formGallery = document.querySelector('.popup__form_section_gallery');

//поля формы редактирования профиля
const nameInput = document.querySelector('.popup__input_personal-data_name');
const aboutMeInput = document.querySelector('.popup__input_personal-data_about-me');

//поля формы добавления карточки
const cardNameInput = document.querySelector('.popup__input_card_name');
const cardLinkInput = document.querySelector('.popup__input_card_link');

//увеличенная картинка и подпись к ней
const zoomedPhoto = document.querySelector('.popup__photo');
const zoomedCaption = document.querySelector('.popup__caption');
//<<< ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ

//ОБЪЯВЛЕНИЕ ФУНКЦИЙ >>>
function openPopup(popup) { //открытие попапа
  popup.classList.add('popup_opened');
}

function initiateInput(input, node) { //инициация инпута текстовыми данными
  input.value = node.textContent;
}

function closePopup(popup) { //закрытие попапа
  popup.classList.remove('popup_opened');
}

function editProfileData(evt) { //редактирование профиля
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = aboutMeInput.value;
  closePopup(evt.target.closest('.popup'));
}

//создание элемента галереи (карточки)
function createGalleryItem(item) {
  const newGalleryItem = galleryItem.cloneNode(true);
  const newGalleryPhoto = newGalleryItem.querySelector('.gallery__photo');
  newGalleryItem.querySelector('.gallery__item-descr').textContent = item.name;
  newGalleryPhoto.src = item.link;
  newGalleryPhoto.alt = item.name;
  //кнопка "лайка"
  const likeButton = newGalleryItem.querySelector('.gallery__like-button');
  //слушатель "лайка"
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('gallery__like-button_active');
  });
  //кнопка удаления карточки
  const delButton = newGalleryItem.querySelector('.gallery__del-button');
  //слушатель удаления
  delButton.addEventListener('click', () => {
    newGalleryItem.remove();
  });
  //слушатель увеличения
  newGalleryPhoto.addEventListener('click', () => {
    zoomIn(item);
  });
  return newGalleryItem;
};

function zoomIn(item) { //увеличение картинки (попап)
  zoomedPhoto.src = item.link;
  zoomedPhoto.alt = item.name;
  zoomedCaption.textContent = item.name;
  openPopup(popupZoomIn);
};
//<<< ОБЪЯВЛЕНИЕ ФУНКЦИЙ

//ПРИВЯЗКА СЛУШАТЕЛЕЙ СОБЫТИЙ >>>
editButton.addEventListener('click', () => { //кнопка редактирования профиля
  openPopup(popupProfile);
  initiateInput(nameInput, profileName);
  initiateInput(aboutMeInput, profileAboutMe);
}); 

addButton.addEventListener('click', () => { //кнопка добавления карточки
  openPopup(popupGallery);
});

closeButtons.forEach(item => { //кнопки закрытия для всех попапов
  item.addEventListener('click', evt => {
    closePopup(evt.target.closest('.popup'));
  });
});

formProfile.addEventListener('submit', editProfileData); //сабмит редактирования профиля
formGallery.addEventListener('submit', evt => { //сабмит добавления карточки
  evt.preventDefault();
  const item = {
    link: cardLinkInput.value,
    name: cardNameInput.value
  };
  gallery.append(createGalleryItem(item));
  evt.target.reset();
  closePopup(popupGallery);
});
//<<< ПРИВЯЗКА СЛУШАТЕЛЕЙ СОБЫТИЙ


initialCards.forEach((item) => { //создание всех карточек из первоначального массива
  const galleryItem = createGalleryItem(item);
  gallery.prepend(galleryItem);
});