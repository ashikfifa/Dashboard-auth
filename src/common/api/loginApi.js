const BASE_URL = "http://localhost:3001";

export const loginApi = (payload) => {
    const result = axios.post(BASE_URL + "/login", payload);
    return result;
};