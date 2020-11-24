import jwt_decode from 'jwt-decode';

const getToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
};

const setToken = (token) => {
  localStorage.setItem('ACCESS_TOKEN', token);
};

const clearToken = () => {
  localStorage.clear();
};

const getRole = () => {
  if (getToken()) {
    const user = jwt_decode(localStorage.getItem('ACCESS_TOKEN')).role;
    return user;
  }
  return 'guest';
};

export default {
  getToken,
  setToken,
  clearToken,
  getRole,
};
