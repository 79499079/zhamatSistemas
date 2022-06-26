import React from 'react';
import Navegacion from '../src/components/navegacion';
import Fondosvg from '../src/components/fondosvg2';
import ParteDos from '../src/components/parteDos';

function App() {
  return (
    <>
      <div className="App">
        <Navegacion />
        <div>
          <Fondosvg />
        </div>
        <div>
          <ParteDos />
        </div>
      </div>
    </>
  );
}

export default App;
