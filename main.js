(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),r=document.querySelector(".popup__input_personal-data_name"),n=document.querySelector(".popup__input_personal-data_about-me"),o={formSelector:".popup__form",inputSelector:".popup__input",nameInputProfileName:"personal-data_name",nameInputProfileAboutMe:"personal-data_about-me",nameInputProfileAvatar:"avatar_link",nameInputCardName:"card_name",nameInputCardLink:"card_link",submitButtonSelector:".popup__submit",popupProfileSelector:".popup_section_profile",popupAvatarSelector:".popup_section_avatar",popupNewCardSelector:".popup_section_gallery",popupZoomInSelector:".popup_section_zoom-in",popupDeleteCardSelector:".popup_section_delete-card",cardTemplateSelector:".gallery-item-template",gallerySelector:".gallery",userNameSelector:".profile__name",userAboutMeSelector:".profile__about-me",avatarSelector:".profile__avatar",avatarOverlaySelector:".profile__avatar-hover",zoomedPhotoSelector:".popup__photo",zoomedCaptionSelector:".popup__caption",inputInvalidClass:"popup__input_invalid",spanErrorClass:"popup__span-error",buttonHoverClass:"button-hover"};function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t,r,n,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardData=t,this._config=r,this._cardTemplateSelector=r.cardTemplateSelector,this._cardItem=document.querySelector(this._cardTemplateSelector).content.querySelector(".gallery__item").cloneNode(!0),this._cardPhoto=this._cardItem.querySelector(".gallery__photo"),this._likeButton=this._cardItem.querySelector(".gallery__like-button"),this._delButton=this._cardItem.querySelector(".gallery__del-button"),this.likeCounter=this._cardItem.querySelector(".gallery__like-counter"),this.likes=t.likes,this.cardID=t._id,this._userID=t.userID,this._ownerID=t.owner._id,this._popupZoomInSelector=r.popupZoomInSelector,this._handleCardClick=n,this._handleDeletion=o,this._handleLike=i,this._idsWhoLiked=[]}var t,r;return t=e,(r=[{key:"_createCardText",value:function(){this._cardItem.querySelector(".gallery__item-descr").textContent=this._cardData.name}},{key:"_createCardPhoto",value:function(){this._cardPhoto.src=this._cardData.link,this._cardPhoto.alt=this._cardData.name,this.likeCounter.textContent=this.likes.length}},{key:"_isYours",value:function(){return this._userID===this._ownerID||(this._delButton.remove(),!1)}},{key:"isLiked",value:function(){var e=this;return this.likes.forEach((function(t){e._idsWhoLiked.push(t._id)})),-1===this._idsWhoLiked.indexOf(this._userID)?(this._idsWhoLiked=[],!1):(this._idsWhoLiked=[],!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardPhoto.addEventListener("click",this._handleCardClick),this._likeButton.addEventListener("click",this._handleLike),this._isYours()&&this._delButton.addEventListener("click",(function(t){e._handleDeletion(t)}))}},{key:"defineLikeState",value:function(){this.isLiked()?this._likeButton.classList.add("gallery__like-button_active"):this._likeButton.classList.remove("gallery__like-button_active")}},{key:"generateCard",value:function(){return this._createCardText(),this._createCardPhoto(),this.defineLikeState(),this._setEventListeners(),this._cardItem}},{key:"removeThisCard",value:function(){this._cardItem.remove()}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t,r){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){return e.validity.valid},(n="_isInputValid")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._config=t,this._formElement=r,this._allInputsOfCurrentForm=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._submitOfCurrentForm=this._formElement.querySelector(this._config.submitButtonSelector),this._buttonHoverClass=t.buttonHoverClass}var t,r;return t=e,(r=[{key:"_toggleInvalidInput",value:function(e,t,r){t?e.classList.remove(r):e.classList.add(r)}},{key:"_isFormValid",value:function(){var e=this;return this._allInputsOfCurrentForm.every((function(t){return e._isInputValid(t)}))}},{key:"_toggleSubmitAvailability",value:function(e,t){t?(e.removeAttribute("disabled"),e.classList.add(this._buttonHoverClass)):(e.setAttribute("disabled",""),e.classList.remove(this._buttonHoverClass))}},{key:"_hideError",value:function(e){e.classList.remove(this._config.inputInvalidClass);var t=".".concat(this._config.spanErrorClass,"_").concat(e.name);this._formElement.querySelector(t).textContent=""}},{key:"enableValidation",value:function(){var e=this;this._allInputsOfCurrentForm.forEach((function(t){var r=".".concat(e._config.spanErrorClass,"_").concat(t.name),n=e._formElement.querySelector(r);t.addEventListener("input",(function(){n.textContent=t.validationMessage,e._toggleInvalidInput(t,e._isInputValid(t),e._config.inputInvalidClass),e._toggleSubmitAvailability(e._submitOfCurrentForm,e._isFormValid())}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleSubmitAvailability(this._submitOfCurrentForm,!1),this._allInputsOfCurrentForm.forEach((function(t){e._hideError(t)}))}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=y(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function m(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(o){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function a(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._zoomedPhoto=r._popup.querySelector(t.zoomedPhotoSelector),r._zoomedCaption=r._popup.querySelector(t.zoomedCaptionSelector),r}return t=a,(r=[{key:"open",value:function(e){_(b(a.prototype),"open",this).call(this),this._zoomedPhoto.src=e.link,this._zoomedPhoto.alt=e.name,this._zoomedCaption.textContent=e.name}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=C(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},w.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function P(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(o){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFormCallback=r,n._config=t,n._form=n._popup.querySelector(n._config.formSelector),n._inputList=n._form.querySelectorAll(n._config.inputSelector),n._submit=n._popup.querySelector(n._config.submitButtonSelector),n._submitValue=n._submit.value,n}return t=a,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;w(E(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormCallback(e._getInputValues())}))}},{key:"close",value:function(){w(E(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submit.value=e?"Сохранение...":this._submitValue}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=A(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},D.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function T(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(o){var r=R(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFormCallback=r,n._config=t,n._form=n._popup.querySelector(n._config.formSelector),n._submit=n._popup.querySelector(n._config.submitButtonSelector),n._targetData,n}return t=a,(r=[{key:"open",value:function(e){D(R(a.prototype),"open",this).call(this),this._targetData=e}},{key:"setEventListeners",value:function(){var e=this;D(R(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormCallback(e._targetData)}))}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(p);function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var V=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=t.userNameSelector,this._userAboutMeSelector=t.userAboutMeSelector,this._avatarSelector=t.avatarSelector,this._avatarOverlaySelector=t.avatarOverlaySelector,this.userName=document.querySelector(this._userNameSelector),this.userAboutMe=document.querySelector(this._userAboutMeSelector),this.avatar=document.querySelector(this._avatarSelector),this.avatarOverlay=document.querySelector(this._avatarOverlaySelector),this._handleAvatarChange=r}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this.userName.textContent,userAboutMe:this.userAboutMe.textContent,avatar:this.avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userAboutMe,n=e.avatarLink;this.userName.textContent=t,this.userAboutMe.textContent=r,this.avatar.src=n}},{key:"setEventListeners",value:function(){this.avatarOverlay.addEventListener("click",this._handleAvatarChange)}}])&&x(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var M,F,z=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers,this._token=t.token,this._cohortID=t.cohortID,this._headers=t.headers}var t,r;return t=e,(r=[{key:"getUserData",value:function(){return fetch("".concat(this._url,"/").concat(this._cohortID,"/users/me"),{headers:this._headers})}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/").concat(this._cohortID,"/cards"),{headers:this._headers})}},{key:"patchUserData",value:function(e,t){return fetch("".concat(this._url,"/").concat(this._cohortID,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._url,"/").concat(this._cohortID,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"postNewCard",value:function(e,t){return fetch("".concat(this._url,"/").concat(this._cohortID,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})})}},{key:"deteteCard",value:function(e){return fetch("".concat(this._url,"/").concat(this._cohortID,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"incrementLikesCount",value:function(e){return fetch("".concat(this._url,"/").concat(this._cohortID,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"decrementLikesCount",value:function(e){return fetch("".concat(this._url,"/").concat(this._cohortID,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/v1",token:"05c6cfbb-e2ef-41b5-87c6-d47779894c52",cohortID:"cohort-52",headers:{authorization:"05c6cfbb-e2ef-41b5-87c6-d47779894c52","Content-Type":"application/json"},_id:"2ed7179f639f399023339296"});function U(e){var t=new a(e,o,(function(){G.open(e)}),(function(t){F=t.target.closest(".gallery__item"),K.open(e)}),(function(){t.isLiked()?z.decrementLikesCount(t.cardID).then((function(e){return e.ok?e.json():Promise.reject(new Error(e.status))})).catch((function(e){return Promise.reject(e)})).then((function(e){t.likes=e.likes,t.likeCounter.textContent=t.likes.length,t.defineLikeState()})).catch((function(e){console.log(e)})):z.incrementLikesCount(t.cardID).then((function(e){return e.ok?e.json():Promise.reject(new Error(e.status))})).catch((function(e){return Promise.reject(e)})).then((function(e){t.likes=e.likes,t.likeCounter.textContent=t.likes.length,t.defineLikeState()})).catch((function(e){console.log(e)}))}));return t.generateCard()}var H=new l({items:[],renderer:function(e){e.userID=M;var t=U(e);H.addItem(t)}},o.gallerySelector);z.getUserData().then((function(e){return e.ok?e.json():Promise.reject(new Error(e.status))})).catch((function(e){return Promise.reject(e)})).then((function(e){var t=e.about,r=e.avatar,n=e.name,o=e._id;M=o,W.setUserInfo({userName:n,userAboutMe:t,avatarLink:r})})).catch((function(e){console.log(e)})).then(z.getInitialCards().then((function(e){return e.ok?e.json():Promise.reject(new Error(e.status))})).catch((function(e){return Promise.reject(e)})).then((function(e){H.renderItems(e)})).catch((function(e){console.log(e)})));var W=new V(o,(function(){Z.open()}));W.setEventListeners();var Z=new j(o.popupAvatarSelector,o,(function(e){Z.renderLoading(!0),z.patchAvatar(e[o.nameInputProfileAvatar]).then((function(e){return e.ok?e.json():Promise.reject(new Error(e.status))})).catch((function(e){console.log(e),Promise.reject(e)})).then((function(e){var t=e.avatar;W.setUserInfo({userName:W.userName.textContent,userAboutMe:W.userAboutMe.textContent,avatarLink:t})})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1),Z.close()}))}));Z.setEventListeners();var J=new j(o.popupProfileSelector,o,(function(e){J.renderLoading(!0),z.patchUserData(e[o.nameInputProfileName],e[o.nameInputProfileAboutMe]).then((function(e){return e.ok?e.json():Promise.reject(new Error(e.status))})).catch((function(e){return Promise.reject(e)})).then((function(e){var t=e.name,r=e.about;W.setUserInfo({userName:t,userAboutMe:r,avatarLink:W.avatar.src})})).catch((function(e){console.log(e)})).finally((function(){J.renderLoading(!1),J.close()}))}));J.setEventListeners(),e.addEventListener("click",(function(){J.open.bind(J)(),X["profile-edit-form"].resetValidation();var e=W.getUserInfo(),t=e.userName,o=e.userAboutMe;r.value=t,n.value=o}));var Y=new j(o.popupNewCardSelector,o,(function(e){Y.renderLoading(!0),z.postNewCard(e[o.nameInputCardName],e[o.nameInputCardLink]).then((function(e){return e.ok?e.json():Promise.reject(new Error(e.status))})).catch((function(e){return Promise.reject(e)})).then((function(e){var t=e.name,r=e.link,n=e.likes,o=e.owner;H.addItem(U({name:t,link:r,likes:n,owner:o,userID:M}))})).catch((function(e){console.log(e)})).finally((function(){Y.renderLoading(!1),Y.close()}))}));Y.setEventListeners();var G=new k(o.popupZoomInSelector,o);G.setEventListeners(),t.addEventListener("click",(function(){Y.open.bind(Y)(),X["card-add-form"].resetValidation()}));var K=new N(o.popupDeleteCardSelector,o,(function(e){z.deteteCard(e._id).then((function(e){return e.ok?e.json():Promise.reject(new Error(e.status))})).catch((function(e){return Promise.reject(e)})).then((function(){F.remove()})).catch((function(e){console.log(e)})).finally((function(){K.close()}))}));K.setEventListeners();var Q,X={};Q=o,Array.from(document.querySelectorAll(Q.formSelector)).forEach((function(e){var t=new u(Q,e),r=e.getAttribute("name");X[r]=t,t.enableValidation()})),X["profile-edit-form"].resetValidation(),X["card-add-form"].resetValidation(),X["avatar-change-form"].resetValidation()})();