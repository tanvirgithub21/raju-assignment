import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CentralStoreProvider from './Context/CentralStoreProvider/CentralStoreProvider';

function App() {
  return (
    <CentralStoreProvider>
      <RouterProvider router={routers} />
      <ToastContainer />
    </CentralStoreProvider>


  );
}

export default App;
