import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CentralStoreProvider from './Context/CentralStoreProvider/CentralStoreProvider';
import FirebaseAuthProvider from './Context/FirebaseAuthProvider/FirebaseAuthProvider';

function App() {
  return (
    <FirebaseAuthProvider>
      <CentralStoreProvider>
        <RouterProvider router={routers} />
        <ToastContainer />
      </CentralStoreProvider>
    </FirebaseAuthProvider>


  );
}

export default App;
