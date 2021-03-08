import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Modal } from './components/Modal';
import { useRoutes } from './routes';

function App() {
  const isAuth = false;

  const routes = useRoutes(isAuth);
  const navbar = Navbar(isAuth);

  return (
    <BrowserRouter>
      {navbar}
      <div className="container pt-4">
        { routes }
      </div>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
