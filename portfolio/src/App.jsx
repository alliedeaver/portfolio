import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/navBar";


export default function App() {
  return (
   <>
      <NavBar />
      <Outlet />

   </>
  );
}


