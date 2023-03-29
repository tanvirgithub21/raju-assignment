import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FirebaseAuthProvider from './Context/FirebaseAuthProvider/FirebaseAuthProvider';
import PostStoreProvider from './Context/PostStoreProvider/PostStoreProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <FirebaseAuthProvider>
      <PostStoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostStoreProvider>
      <ToastContainer />
    </FirebaseAuthProvider>

  </React.StrictMode>
);
