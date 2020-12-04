import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes';
import LocalStorage from './services/localStorage';
import CurrentPregContext from './context/CurrentPregContext';
import UserContext from './context/UserContext';
import LocalStorageService from './services/localStorage';

function App() {
  const curPreg = JSON.parse(localStorage.getItem('currentPreg'))
    ? JSON.parse(localStorage.getItem('currentPreg'))
    : {
        currentPregId: '',
        id: '',
        idCard: '',
        firstName: '',
        lastName: '',
        GA: '',
        createdAt: '',
        isTerminate: false,
        isActive: false,
      };
  console.log(curPreg);
  const [mother, setMother] = useState(curPreg);

  const [role, setRole] = useState(LocalStorage.getRole());

  return (
    <div className="App" style={{ width: '100vw' }}>
      <CurrentPregContext.Provider value={{ mother, setMother }}>
        <UserContext.Provider value={LocalStorageService.getId()}>
          <PrivateRoutes role={role} setRole={setRole} />
        </UserContext.Provider>
      </CurrentPregContext.Provider>
    </div>
  );
}

export default App;
