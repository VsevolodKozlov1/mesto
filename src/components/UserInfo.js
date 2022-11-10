export default class UserInfo {
    constructor(config, handleAvatarChange) {
        this._userNameSelector = config.userNameSelector;
        this._userAboutMeSelector = config.userAboutMeSelector;
        this._avatarSelector = config.avatarSelector;
        this._avatarOverlaySelector = config.avatarOverlaySelector;
        this.userName = document.querySelector(this._userNameSelector);
        this.userAboutMe = document.querySelector(this._userAboutMeSelector);
        this.avatar = document.querySelector(this._avatarSelector);
        this.avatarOverlay = document.querySelector(this._avatarOverlaySelector);
        this._handleAvatarChange = handleAvatarChange;
      }

    getUserInfo() {
        return {
            userName: this.userName.textContent,
            userAboutMe: this.userAboutMe.textContent,
            avatar: this.avatar.src
        }
    }

    setUserInfo({ userName, userAboutMe, avatarLink }) {
        this.userName.textContent = userName;
        this.userAboutMe.textContent = userAboutMe;
        this.avatar.src = avatarLink;
    }

    setEventListeners() {
        this.avatarOverlay.addEventListener('click', this._handleAvatarChange)
    }
}