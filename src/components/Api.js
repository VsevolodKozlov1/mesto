export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
        this._token = options.token;
        this._cohortID = options.cohortID;
        this._headers = options.headers;
    }

    getUserData() {
        return fetch(`${this._url}/${this._cohortID}/users/me`, {
            headers: this._headers
        });
    }

    getInitialCards() {
        return fetch(`${this._url}/${this._cohortID}/cards`, {
            headers: this._headers
        });
    }

    patchUserData(name, about) {
        return fetch(`${this._url}/${this._cohortID}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, about })
        });
    }

    patchAvatar(avatar) {
        return fetch(`${this._url}/${this._cohortID}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ avatar })
        });
    }

    postNewCard(name, link) {
        return fetch(`${this._url}/${this._cohortID}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, link })
        });
    }

    deteteCard(cardID) {
        return fetch(`${this._url}/${this._cohortID}/cards/${cardID}`, {
            method: 'DELETE',
            headers: this._headers
        });
    }

    incrementLikesCount(cardID){
        return fetch(`${this._url}/${this._cohortID}/cards/${cardID}/likes`, {
            method: 'PUT',
            headers: this._headers
        });
    }

    decrementLikesCount(cardID) {
        return fetch(`${this._url}/${this._cohortID}/cards/${cardID}/likes`, {
            method: 'DELETE',
            headers: this._headers
        });
    }


}
