import Login from '../pages/Login';
import MotherRegister from '../pages/MotherRegister';
import ContentPage from '../pages/ContentPage';
import Anc from '../pages/Anc';
import MainStaff from '../pages/MainStaff';
import MotherProfile from '../pages/MotherProfile';
import MotherInformation from '../pages/MotherInformation';
import MotherIndex from '../pages/MotherIndex';
import MotherShopping from '../pages/Shopping';
import RiskEvaluation from '../pages/RiskEvaluation';
import Dental from '../pages/dental';
import MotherReport from '../pages/MotherReport';
import Lab from '../pages/Lab';
import Terminate from '../pages/Terminate';
import FastTerminate from '../pages/FastTerminate';
import GaCare from '../pages/GaCare';
import ForgotPassword from '../pages/ForgotPassword';
import LogToday from '../pages/LogToday';
import Faq from '../pages/FaqSheet';

const allPages = {
  // path ของ staff เท่านั้น
  mainStaff: {
    url: '/',
    page: MainStaff,
  },
  MotherReport: {
    url: '/staff/motherReport',
    page: MotherReport,
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
  risk: {
    url: '/staff/risk',
    page: RiskEvaluation,
  },
  lab: {
    url: '/staff/lab',
    page: Lab,
  },
  terminate: {
    url: '/staff/terminate',
    page: Terminate,
  },
  fastTerminate: {
    url: '/staff/fastTerminate',
    page: FastTerminate,
  },
  gaCare: {
    url: '/staff/gaCare',
    page: GaCare,
  },
  forgotPassword: {
    url: '/staff/forgotPassword',
    page: ForgotPassword,
  },
  logToday: {
    url: '/staff/logToday',
    page: LogToday,
  },
  faq: {
    url: '/staff/faq',
    page: Faq,
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
  motherShopping: {
    url: '/shopping/mom',
    page: MotherShopping,
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
  guest: [allPages.login, allPages.contentPage, allPages.motherIndex],
  mother: [
    allPages.contentPage,
    allPages.motherProfile,
    allPages.motherInformation,
    allPages.motherIndex,
    allPages.motherShopping,
  ],
  staff: [
    allPages.motherRegister,
    allPages.contentPage,
    allPages.anc,
    allPages.mainStaff,
    allPages.risk,
    allPages.dental,
    allPages.MotherReport,
    allPages.lab,
    allPages.terminate,
    allPages.fastTerminate,
    allPages.gaCare,
    allPages.forgotPassword,
    allPages.logToday,
    allPages.faq,
  ],
};

export default permissionList;
