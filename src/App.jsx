
import './App.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Chefs from './components/Chefs';
import Contact from './components/Contact';
import Starterssection from './components/Starterssection';
import Maincoursessection from './components/Maincoursessection';
import Dessertssection from './components/Dessertssection';
import Beveragessection from './components/Beveragessection';

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
    </div>,
    children:[
      {
        index: true,
        element: <Starterssection />
      },
      {
        path:'starters',
        element: <Starterssection />
      },
      {
        path:'maincourses',
        element: <Maincoursessection />
      },
      {
        path:'desserts',
        element: <Dessertssection />
      },
      {
        path:'beverages',
        element: <Beveragessection />
      }

      
    ]
 
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
