import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/routers';
import NavbarComponent from './ShredComponents/Navbar/NavbarComponent';
import Sidebar from './ShredComponents/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent />
        <div className='flex'>

          {/* main app left sidebar */}
          <div className='w-[14rem] h-screen p-3 border-r-2 border-gray-100'>
            <Sidebar />
          </div>

          {/* all routeing show hear */}
          <div className='px-3'>
            <RouterProvider router={routers} />
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
