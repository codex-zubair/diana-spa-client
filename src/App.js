import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import { route } from './Routes/Routes';

function App() {
  const helmetContext = {};
  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>   
       <RouterProvider router={route}></RouterProvider>
       </HelmetProvider>


    </div>
  );
}

export default App;
