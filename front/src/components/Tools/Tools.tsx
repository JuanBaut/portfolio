import { FC } from "react";
import terminal from "../../assets/tools/terminal.png";
import style from "./Tools.module.css";

const Tools: FC = () => {
  return (
    <div className={style.container}>
      <h5 className={style.text}>
        Neovim is my weapon of choice! I am an avid terminal user and there is
        nothing I enjoy more like the speed I get from such open source tools.
        If you wish to know more about what I use, check my{" "}
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/JuanBaut/dotfiles"
        >
          dotfiles
        </a>
        .
      </h5>
      <img className={style.image} src={terminal} />
    </div>
  );
};

export default Tools;
