import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './components/About/AboutPage.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';
import Homepage from './components/homePage/Homepage.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

