import './App.css';
import { Route } from 'react-router-dom';
import Login from './pages/login/index';
import MotherRegister from './pages/MotherRegister/index';
import MotherProfile from './pages/MotherProfile/index';
import MotherInformation from './pages/MotherInformations/index';
import PageLayout from './components/Layout';

import RiskEvaluation from './pages/RiskEvaluation/index';

function App() {
  return (
    <PageLayout>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={MotherRegister} />
      <Route exact path="/profile" component={MotherProfile} />
      <Route exact path="/" component={MotherInformation} />

      <Route exact path="/risk" component={RiskEvaluation} />
    </PageLayout>
  );
}

export default App;
