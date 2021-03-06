import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/categories'}  component={Categories} />
          <Route path={'/about'}  component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
