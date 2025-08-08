
import './App.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Chefs from './components/Chefs';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element : <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: '/about',
    element : <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path: '/Menu',
    element : <div>
      <Navbar/>
      <Menu/>
    </div>
  },
  {
    path: '/chefs',
    element : <div>
      <Navbar/>
      <Chefs/>
    </div>
  },
  {
    path: '/contact',
    element : <div>
      <Navbar/>
      <Contact/>
    </div>
  },

]
);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App
