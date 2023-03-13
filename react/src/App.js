import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseAuthProvider from './Context/FirebaseAuthProvider/FirebaseAuthProvider';
import PostStoreProvider from './Context/PostStoreProvider/PostStoreProvider';

function App() {
  return (
    <FirebaseAuthProvider>
      <PostStoreProvider>
        <RouterProvider router={routers} />
        <ToastContainer />
      </PostStoreProvider>
    </FirebaseAuthProvider>


  );
}

export default App;
