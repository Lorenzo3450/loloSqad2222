const USERS_REST_API_URL = "http://localhost:8080/api/";

class UserService {
    fazerLogin(dadosLogin) {
        // ... código existente de fazerLogin ...

        return fetch(`${USERS_REST_API_URL}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosLogin),
        }).then(res => res.json());
    }

    RealizaCadastro(formData) {
        return fetch(`${USERS_REST_API_URL}cadastro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(res => res.json());
    }
}

export default new UserService();
