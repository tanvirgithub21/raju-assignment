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
        <div className='flex bg-gray-50'>

          {/* main app left sidebar */}
          <div className='w-[22rem] h-screen p-3 sticky top-[61px]'>
            <Sidebar />
          </div>

          {/* all routeing show hear */}
          <div className='px-3 w-full'>
            <RouterProvider router={routers} />
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
