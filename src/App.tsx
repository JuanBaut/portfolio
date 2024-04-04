import { Outlet } from "react-router-dom";
import NavBar from "./features/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
