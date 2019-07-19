import React from 'react';
import Header from './Header';
import Lineup from './Lineup';
import CenterPane from './CenterPane';
import BottomPane from './BottomPane';

function App() {
  return (
    <div>
      <Header />
      <Lineup />
      <CenterPane />
      <Lineup />
      <BottomPane />
    </div>
  );
}

export default App;