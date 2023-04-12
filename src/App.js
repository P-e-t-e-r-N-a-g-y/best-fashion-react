import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Home from './pages/Home';
import Items from './pages/Items';
import Login from './pages/Login';
import Favourite from './pages/Favourite';
import Basket from './pages/Basket';
import New from './pages/New';

const router = createBrowserRouter([
  {path: '/', element: <Home /> },
  {path: '/items', element: <Items /> },
  {path: '/login', element: <Login /> },
  {path: '/favourite', element: <Favourite /> },
  {path: '/basket', element: <Basket /> },
  {path: '/new', element: <New /> },
]);

function App() {
  return ( <RouterProvider router={router} />);
}

export default App;
