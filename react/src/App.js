import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import AllPostAndMyPost from './AdminDashboard/AllPost/AllPostAndMyPost';
import MakeAdminAndUser from './AdminDashboard/MakeAdminAndUser/MakeAdminAndUser';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyPost from './Components/MyPost/MyPost';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import NavbarComponent from './ShredComponents/Navbar/NavbarComponent';

function App() {
  return (
    <div>

      <NavbarComponent />
      <Routes>
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/my-post' element={<PrivateRoute><MyPost /></PrivateRoute>} />
        <Route path='/admin' element={<PrivateRoute><AdminDashboard /></PrivateRoute>} >
          <Route path='' element={<AllPostAndMyPost pageName="all-posts" />} />
          <Route path='my-post' element={<AllPostAndMyPost pageName="my-posts" />} />
          <Route path='make-admin' element={<MakeAdminAndUser pageName="make-admin" />} />
          <Route path='user-management' element={<MakeAdminAndUser pageName="user-management" />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>


  );
}

export default App;
