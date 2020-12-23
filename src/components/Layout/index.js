import { useState } from 'react';
import './layout.css';
import NavBar from '../NavBar/index';

function Layout({ children, role, setRole, page }) {
  const [show, setShow] = useState(false);
  return (
    <div className="webLatout">
      <NavBar role={role} setRole={setRole} page={page} show={show} setShow={setShow} />
      <div className="deco-header"></div>
      {children}
    </div>
  );
}

export default Layout;
