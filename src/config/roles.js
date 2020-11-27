import Login from '../pages/Login';
import MotherRegister from '../pages/MotherRegister';
import ContentPage from '../pages/ContentPage';
import Anc from '../pages/Anc';
import MainStaff from '../pages/MainStaff';
import MotherProfile from '../pages/MotherProfile';
import MotherInformation from '../pages/MotherInformation';
import MotherIndex from '../pages/MotherIndex';
import RiskEvaluation from '../pages/RiskEvaluation';
import Dental from '../pages/dental';

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
  risk: {
    url: '/risk',
    page: RiskEvaluation,
  },
  dental: {
    url: '/dental',
    page: Dental,
  },
};

const permissionList = {
  guest: [allPages.login, allPages.contentPage, allPages.motherIndex],
  mother: [allPages.contentPage, allPages.motherProfile, allPages.motherInformation],
  staff: [
    allPages.motherRegister,
    allPages.contentPage,
    allPages.anc,
    allPages.mainStaff,
    allPages.risk,
    allPages.dental,
  ],
};

export default permissionList;
