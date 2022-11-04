export default class UserInfo {
    constructor({ userNameSelector, userAboutMeSelector }) {
        this._userNameSelector = userNameSelector;
        this._userAboutMeSelector = userAboutMeSelector;
        this._userName = document.querySelector(this._userNameSelector);
        this._userAboutMe = document.querySelector(this._userAboutMeSelector)
    }

    getUserInfo() {
        return {
            userName: this._userName.textContent,
            userAboutMe: this._userAboutMe.textContent
        }
    }

    setUserInfo({ userName, userAboutMe }) {
        this._userName.textContent = userName;
        this._userAboutMe.textContent = userAboutMe;
    }
}