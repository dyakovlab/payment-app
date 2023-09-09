import AppRouter from './components/AppRouter';
import {Suspense} from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className={'loader'}>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
