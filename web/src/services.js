import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://ranekapilocal.local/wp-json/api"
});

axiosInstance.interceptors.request.use(
  config => {
    const token = window.localStorage.token;
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  login(body) {
    return axios.post(
      `http://ranekapilocal.local/wp-json/jwt-auth/v1/token`,
      body
    );
  },
  validateToken() {
    return axios.post(
      `http://ranekapilocal.local/wp-json/jwt-auth/v1/token/validate`
    );
  }
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
