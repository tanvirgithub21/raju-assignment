import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/routers';
import NavbarComponent from './ShredComponents/Navbar/NavbarComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent />


        {/* all routeing show hear */}
        <div className='px-3 w-full'>
          <RouterProvider router={routers} />
        </div>

        {/* </div> */}
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
