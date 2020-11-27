import Login from '../pages/Login';
import MotherRegister from '../pages/MotherRegister';
import ContentPage from '../pages/ContentPage';
import Anc from '../pages/Anc';
import MainStaff from '../pages/MainStaff';
import MotherProfile from '../pages/MotherProfile';
import MotherInformation from '../pages/MotherInformation';
import MotherIndex from '../pages/MotherIndex';

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
    url: '/mother/information',
    page: MotherInformation,
  },
  motherIndex: {
    url: '/',
    page: MotherIndex,
  },
};

const permissionList = {
  guest: [allPages.login, allPages.contentPage],
<<<<<<< HEAD
  mother: [allPages.contentPage, allPages.motherProfile, allPages.motherInformation],
=======
  mother: [allPages.contentPage, allPages.motherProfile, allPages.motherInformation, allPages.motherIndex],
>>>>>>> ea3f5a5474cabf23aeea3d5c09d2e403e6aeeea3
  staff: [allPages.motherRegister, allPages.contentPage, allPages.anc, allPages.mainStaff],
};

export default permissionList;
