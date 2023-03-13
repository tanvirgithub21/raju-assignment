import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseAuthProvider from './Context/FirebaseAuthProvider/FirebaseAuthProvider';

function App() {
  return (
    <FirebaseAuthProvider>
      <RouterProvider router={routers} />
      <ToastContainer />
    </FirebaseAuthProvider>


  );
}

export default App;
