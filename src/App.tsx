
import NavbarAvatar from './components/Navbar';
import { Outlet } from 'react-router-dom';
const App = () => {

 
  return (
    <div>
      <NavbarAvatar />
     
      <Outlet />
    </div>
  );
};

export default App;