import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/index';
import Login from './pages/Login/index';
import MotherRegister from './pages/MotherRegister/index';

function App() {
  return (
    <div className="App" style={{ width: '100vw' }}>
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default App;
