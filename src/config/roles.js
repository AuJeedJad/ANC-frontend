import Login from '../pages/Login';
import MotherRegister from '../pages/MotherRegister';
import ContentPage from '../pages/ContentPage';
import Anc from '../pages/Anc';
import MainStaff from '../pages/MainStaff';
import MotherProfile from '../pages/MotherProfile';
import MotherInformation from '../pages/MotherInformation';
import MotherIndex from '../pages/MotherIndex';
import Dental from '../pages/dental';

const allPages = {
  // path ของ staff เท่านั้น
  mainStaff: {
    url: '/',
    page: MainStaff,
  },
  motherRegister: {
    url: '/staff/motherRegister',
    page: MotherRegister,
  },
  anc: {
    url: '/staff/anc',
    page: Anc,
  },
  dental: {
    url: '/staff/dental',
    page: Dental,
  },
  // path ของ mother เท่านั้น
  motherIndex: {
    url: '/',
    page: MotherIndex,
  },
  motherInformation: {
    url: '/mother/information',
    page: MotherInformation,
  },
  motherProfile: {
    url: '/mother/profile',
    page: MotherProfile,
  },
  // ของ guest เท่านั้น
  login: {
    url: '/',
    page: Login,
    name: 'login',
  },
  // path ที่เข้าถึงได้ทุกคน
  contentPage: {
    url: '/content',
    page: ContentPage,
  },
};

const permissionList = {
  guest: [allPages.login, allPages.contentPage],
  mother: [allPages.contentPage, allPages.motherProfile, allPages.motherInformation, allPages.motherIndex],
  staff: [allPages.motherRegister, allPages.contentPage, allPages.anc, allPages.mainStaff, allPages.dental],
};

export default permissionList;
