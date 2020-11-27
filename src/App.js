import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes';
import LocalStorage from './services/localStorage';
<<<<<<< HEAD
import CurrentPregContext from './context/CurrentPregContext';
=======
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/index';
import Login from './pages/Login/index';
import MotherRegister from './pages/MotherRegister/index';
>>>>>>> ea3f5a5474cabf23aeea3d5c09d2e403e6aeeea3

function App() {
  const [mother, setMother] = useState({ currentPregId: '', idCard: '', Name: '', lastName: '', GA: 0 });
  const [role, setRole] = useState(LocalStorage.getRole());

  return (
    <div className="App" style={{ width: '100vw' }}>
<<<<<<< HEAD
      <CurrentPregContext.Provider value={{ mother, setMother }}>
        <PrivateRoutes role={role} setRole={setRole} />
      </CurrentPregContext.Provider>
=======
      <PrivateRoutes role={role} setRole={setRole} />
      <Layout>
        <MotherRegister />
      </Layout>
>>>>>>> ea3f5a5474cabf23aeea3d5c09d2e403e6aeeea3
    </div>
  );
}

export default App;
