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

const getId = () => {
  if (getToken()) {
    const hospitalId = jwt_decode(localStorage.getItem('ACCESS_TOKEN')).hospitalId;
    const id = jwt_decode(localStorage.getItem('ACCESS_TOKEN')).id;
    return { hospitalId, id };
  }
  return { hospitalId: '', id: '' };
};

export default {
  getToken,
  setToken,
  clearToken,
  getRole,
  getId,
};
