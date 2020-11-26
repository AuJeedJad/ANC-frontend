import Login from '../pages/Login';
import MotherRegister from '../pages/MotherRegister';
import ContentPage from '../pages/ContentPage';
import Anc from '../pages/Anc';
import MainStaff from '../pages/MainStaff';
import MotherProfile from '../pages/MotherProfile';
import MotherInformation from '../pages/MotherInformation';

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
  anc: {
    url: '/staff/anc',
    page: Anc,
  },
  mainStaff: {
    url: '/',
    page: MainStaff,
  },
  motherProfile: {
    url: '/mother/profile',
    page: MotherProfile,
  },
  motherInformation: {
    url: '/',
    page: MotherInformation,
  },
};

const permissionList = {
  guest: [allPages.login, allPages.contentPage],
  mother: [allPages.contentPage, allPages.motherProfile, allPages.MotherInformation],
  staff: [allPages.motherRegister, allPages.contentPage, allPages.anc, allPages.mainStaff],
};

export default permissionList;
