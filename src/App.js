import './App.css';
import 'react-day-picker/dist/style.css';
import { router } from './Routers/Router/Router';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </>
  );
}

export default App;
