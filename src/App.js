import './App.css';
import { Route } from 'react-router-dom';
import Login from './pages/login/index';
import MotherRegister from './pages/MotherRegister/index';
import MotherProfile from './pages/MotherProfile/index';
import MotherInformation from './pages/MotherInformations/index';

function App() {
  return (
    <div className="App" style={{ width: '100%', minHeight: '100vh' }}>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={MotherRegister} />
      <Route exact path="/profile" component={MotherProfile} />
      <Route exact path="/" component={MotherInformation} />
    </div>
  );
}

export default App;
