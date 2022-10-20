import * as React from 'react';
import { Navbar } from './components/Navbar';

import { MainPage } from './pages/MainPage/MainPage';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MainPage />
    </React.Fragment>
  );
};

export default App;
