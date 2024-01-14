import { FC } from "react";
import style from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";

const Navigation: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/projects")}>Projects</button>
      <button onClick={() => navigate("/tools")}>Tools</button>
      <button onClick={() => navigate("/photos")}>Photos</button>
    </div>
  );
};

export default Navigation;
