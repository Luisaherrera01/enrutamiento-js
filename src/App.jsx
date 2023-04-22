
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Formulario from "./components/Formulario.jsx";
import Home1 from "./components/Home1.jsx";
import Header from "./components/Header.jsx";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home1 />
  },
  {
    path: '/formulario',
    element: <Formulario />
  },
  {
    path: '/header',
    element: <Header />
  }

])

function App() {
 

  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App;
