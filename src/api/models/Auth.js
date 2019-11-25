import Model from "../Model";

class Auth extends Model {
    buildUrl ({ action }) {
        return ['security', action];
    }

    login(form) {
        return this.request({
            action: 'login',
            method: 'POST',
            data: form
        });
    }

    logout() {
        return this.request({
            action: 'logout',
            method: 'POST'
        });
    }

    me() {
        return this.request({
            action: 'me',
            method: 'GET'
        });
    }
};

export default new Auth;