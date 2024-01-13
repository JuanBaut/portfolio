import { FC } from "react";
import style from "./Home.module.css";
import Navigation from "../Navigation/Navigation";

const Home: FC = () => {
  return (
    <div>
      <Navigation />
      <div className={style.name}>
        <h1 className={style.fn}>Juan</h1>
        <h1 className={style.mn}>Andres</h1>
        <h1 className={style.ln}>Bautista</h1>
      </div>
      <h5>This is a paragraph only used to test my fonts</h5>
    </div>
  );
};

export default Home;
