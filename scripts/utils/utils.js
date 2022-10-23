const zoomedPhoto = document.querySelector('.popup__photo');
const zoomedCaption = document.querySelector('.popup__caption');

//все Function Declarations из 'index.js' перенесены в 'utils.js' из-за связности
function openPopup(popupItem) { //открытие попапа
  popupItem.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function zoomIn(item, popupSelector) { //увеличение картинки
  zoomedPhoto.src = item.link;
  zoomedPhoto.alt = item.name;
  zoomedCaption.textContent = item.name;
  openPopup(document.querySelector(popupSelector));
};

function initiateInput(input, node) { //инициация инпута текстовыми данными
  input.value = node.textContent;
}

function closePopup(popupItem) { //закрытие попапа
  popupItem.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

function editProfileData(evt) { //редактирование профиля
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = aboutMeInput.value;
  closePopup(evt.target.closest('.popup'));
}

function closeByEsc(evt) { //закрытие попапов по кнопке Esc
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  };
};

export {
  zoomedPhoto,
  zoomedCaption,
  zoomIn,
  openPopup,
  initiateInput,
  closePopup,
  editProfileData,
  closeByEsc
};

