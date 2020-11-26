import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes';
import LocalStorage from './services/localStorage';

function App() {
  const [role, setRole] = useState(LocalStorage.getRole());

  return (
    <div className="App" style={{ width: '100vw' }}>
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
