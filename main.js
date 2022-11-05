(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),r=document.querySelector(".popup__input_personal-data_name"),n=document.querySelector(".popup__input_personal-data_about-me"),o={formSelector:".popup__form",inputSelector:".popup__input",nameInputProfileName:"personal-data_name",nameInputProfileAboutMe:"personal-data_about-me",nameInputCardName:"card_name",nameInputCardLink:"card_link",submitButtonSelector:".popup__submit",popupProfileSelector:".popup_section_profile",popupNewCardSelector:".popup_section_gallery",popupZoomInSelector:".popup_section_zoom-in",cardTemplateSelector:".gallery-item-template",gallerySelector:".gallery",userNameSelector:".profile__name",userAboutMeSelector:".profile__about-me",zoomedPhotoSelector:".popup__photo",zoomedCaptionSelector:".popup__caption",inputInvalidClass:"popup__input_invalid",spanErrorClass:"popup__span-error",buttonHoverClass:"button-hover"};function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardData=t,this._cardTemplateSelector=r.cardTemplateSelector,this._cardItem=document.querySelector(this._cardTemplateSelector).content.querySelector(".gallery__item").cloneNode(!0),this._cardPhoto=this._cardItem.querySelector(".gallery__photo"),this._likeButton=this._cardItem.querySelector(".gallery__like-button"),this._delButton=this._cardItem.querySelector(".gallery__del-button"),this._popupZoomInSelector=r.popupZoomInSelector,this._handleCardClick=n}var t,r;return t=e,(r=[{key:"_createCardText",value:function(){this._cardItem.querySelector(".gallery__item-descr").textContent=this._cardData.name}},{key:"_createCardPhoto",value:function(){this._cardPhoto.src=this._cardData.link,this._cardPhoto.alt=this._cardData.name}},{key:"_toggleLikeButton",value:function(){this._likeButton.classList.toggle("gallery__like-button_active")}},{key:"_removeCardItem",value:function(){this._cardItem.remove(),this._cardItem=null}},{key:"_setEventListeners",value:function(){this._cardPhoto.addEventListener("click",this._handleCardClick),this._likeButton.addEventListener("click",this._toggleLikeButton.bind(this)),this._delButton.addEventListener("click",this._removeCardItem.bind(this))}},{key:"generateCard",value:function(){return this._createCardText(),this._createCardPhoto(),this._setEventListeners(),this._cardItem}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t,r){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){return e.validity.valid},(n="_isInputValid")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._config=t,this._formElement=r,this._allInputsOfCurrentForm=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._submitOfCurrentForm=this._formElement.querySelector(this._config.submitButtonSelector),this._buttonHoverClass=t.buttonHoverClass}var t,r;return t=e,(r=[{key:"_toggleInvalidInput",value:function(e,t,r){t?e.classList.remove(r):e.classList.add(r)}},{key:"_isFormValid",value:function(){var e=this;return this._allInputsOfCurrentForm.every((function(t){return e._isInputValid(t)}))}},{key:"_toggleSubmitAvailability",value:function(e,t){t?(e.removeAttribute("disabled"),e.classList.add(this._buttonHoverClass)):(e.setAttribute("disabled",""),e.classList.remove(this._buttonHoverClass))}},{key:"_hideError",value:function(e){e.classList.remove(this._config.inputInvalidClass);var t=".".concat(this._config.spanErrorClass,"_").concat(e.name);this._formElement.querySelector(t).textContent=""}},{key:"enableValidation",value:function(){var e=this;this._allInputsOfCurrentForm.forEach((function(t){var r=".".concat(e._config.spanErrorClass,"_").concat(t.name),n=e._formElement.querySelector(r);t.addEventListener("input",(function(){n.textContent=t.validationMessage,e._toggleInvalidInput(t,e._isInputValid(t),e._config.inputInvalidClass),e._toggleSubmitAvailability(e._submitOfCurrentForm,e._isFormValid())}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleSubmitAvailability(this._submitOfCurrentForm,!1),this._allInputsOfCurrentForm.forEach((function(t){e._hideError(t)}))}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=_(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},m.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._zoomedPhoto=r._popup.querySelector(t.zoomedPhotoSelector),r._zoomedCaption=r._popup.querySelector(t.zoomedCaptionSelector),r}return t=a,(r=[{key:"open",value:function(e){m(v(a.prototype),"open",this).call(this),this._zoomedPhoto.src=e.link,this._zoomedPhoto.alt=e.name,this._zoomedCaption.textContent=e.name}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(f);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=w(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},C.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function E(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(o){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFormCallback=r,n._config=t,n._form=n._popup.querySelector(n._config.formSelector),n._inputList=n._form.querySelectorAll(n._config.inputSelector),n}return t=a,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;C(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormCallback(e._getInputValues())}))}},{key:"close",value:function(){C(P(a.prototype),"close",this).call(this),this._form.reset()}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(f);function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var L=new(function(){function e(t){var r=t.userNameSelector,n=t.userAboutMeSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=r,this._userAboutMeSelector=n,this._userName=document.querySelector(this._userNameSelector),this._userAboutMe=document.querySelector(this._userAboutMeSelector)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userAboutMe:this._userAboutMe.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userAboutMe;this._userName.textContent=t,this._userAboutMe.textContent=r}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({userNameSelector:o.userNameSelector,userAboutMeSelector:o.userAboutMeSelector}),A=new I(o.popupProfileSelector,o,(function(e){L.setUserInfo({userName:e[o.nameInputProfileName],userAboutMe:e[o.nameInputProfileAboutMe]}),A.close()}));A.setEventListeners(),e.addEventListener("click",(function(){A.open.bind(A)(),T["profile-edit-form"].resetValidation();var e=L.getUserInfo(),t=e.userName,o=e.userAboutMe;r.value=t,n.value=o}));var q=new I(o.popupNewCardSelector,o,(function(e){var t=[{link:e[o.nameInputCardLink],name:e[o.nameInputCardName]}];x.renderItems(t),q.close()}));q.setEventListeners();var x=new s({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t,r=new a(t=e,o,(function(){N.open(t)})).generateCard();x.addItem(r)}},o.gallerySelector);x.renderItems(x._items);var N=new g(o.popupZoomInSelector,o);N.setEventListeners(),t.addEventListener("click",(function(){q.open.bind(q)(),T["card-add-form"].resetValidation()}));var R,T={};R=o,Array.from(document.querySelectorAll(R.formSelector)).forEach((function(e){var t=new c(R,e),r=e.getAttribute("name");T[r]=t,t.enableValidation()})),T["profile-edit-form"].resetValidation(),T["card-add-form"].resetValidation()})();