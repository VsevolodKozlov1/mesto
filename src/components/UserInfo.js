export default class UserInfo {
    constructor({ userNameSelector, userAboutMeSelector }) {
        this._userNameSelector = userNameSelector;
        this._userAboutMeSelector = userAboutMeSelector;
    }

    getUserInfo() {
        return {
            userName: document.querySelector(this._userNameSelector).textContent,
            userAboutMe: document.querySelector(this._userAboutMeSelector).textContent
        }
    }

    setUserInfo({ userName, userAboutMe }) {
        document.querySelector(this._userNameSelector).textContent = userName;
        document.querySelector(this._userAboutMeSelector).textContent = userAboutMe;
    }
}