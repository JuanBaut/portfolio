import { FC } from "react";
import style from "./Home.module.css";
import Navigation from "../Navigation/Navigation";

const Home: FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.name}>
          <h1 className={style.fn}>Juan</h1>
          <h1 className={style.mn}>Andres</h1>
          <h1 className={style.ln}>Bautista</h1>
        </div>
        <h4 className={style.description}>
          I am a full-stack web developer, but before anything I am a creative.
          Born and based in Colombia. I believe in great taste and designing
          things with passion in order to solve problems correctly with
          usability and aesthetics in mind.
        </h4>
      </div>
    </>
  );
};

export default Home;
