import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
      <ToastContainer />
    </div>
  );
}

export default App;
