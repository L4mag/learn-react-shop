import React, {  } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { useRoutes } from './routes';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';


function App() {
  const {token, login, logout, userId, isAdmin} = useAuth();
  const isAuth = !!token;
  const routes = useRoutes(isAuth, isAdmin);

  return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuth, isAdmin
      }}>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            { routes }
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
