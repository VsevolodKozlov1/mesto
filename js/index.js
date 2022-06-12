let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

function popupOpen() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', popupOpen);

// let closeButton = document.querySelector('.popup__close-button');

// function popupClose() {
//     popup.classList.remove('popup_opened');
// }

// closeButton.addEventListener('click', popupClose);


// // Находим форму в DOM
// let formElement = document.querySelector('.popup__save-button'); // Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = document.querySelector('.popup__input_name'); // Воспользуйтесь инструментом .querySelector()
// let aboutMeInput = document.querySelector('.popup__input_about-me'); // Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler(evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//     // Так мы можем определить свою логику отправки.
//     // О том, как это делать, расскажем позже.

//     // Получите значение полей aboutMeInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler); 