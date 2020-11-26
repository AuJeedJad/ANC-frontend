import Login from '../pages/Login/index';
import MotherRegister from '../pages/MotherRegister/index';
import ContentPage from '../pages/ContentPage/index';

const allPages = {
  login: {
    url: '/',
    page: Login,
    name: 'login',
  },
  contentPage: {
    url: '/content',
    page: ContentPage,
  },
  motherRegister: {
    url: '/staff/motherRegister',
    page: MotherRegister,
  },
};

const permissionList = {
  guest: [allPages.login, allPages.contentPage],
  mother: [allPages.contentPage],
  staff: [allPages.motherRegister, allPages.contentPage],
};

export default permissionList;
