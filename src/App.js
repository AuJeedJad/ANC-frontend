import './App.css';
import { Route } from 'react-router-dom';
import Login from './pages/login/index';
import MotherRegister from './pages/MotherRegister/index';
import MotherProfile from './pages/MotherProfile/index';
import MotherInformation from './pages/MotherInformation/index';
import PageLayout from './components/Layout';
import MotherIndex from './pages/MotherIndex/index';

function App() {
  return (
    <PageLayout>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={MotherRegister} />
      <Route exact path="/profile" component={MotherProfile} />
      <Route exact path="/information" component={MotherInformation} />
      <Route exact path="/" component={MotherIndex} />
    </PageLayout>
  );
}

export default App;
