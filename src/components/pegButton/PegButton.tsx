import {FunctionComponent, useState, useContext} from "react";
import styles from "./PegButton.styles.module.css";

import {GameContext} from "../masterMind/MasterMind";

interface props {
  color: string;
  onClick: (color: string) => void;
}

const PegButton: FunctionComponent<props> = ({color, onClick}) => {
  const [clicked, setClicked] = useState(false);
  const gameStatus = useContext(GameContext);
  const onClickHandler = () => {
    setClicked(true);
    onClick(color);
  };

  const {peg, pegClicked} = styles;
  return (
    <div
      className={`${peg}${clicked ? ` ${pegClicked}` : ''}`}
      style={{backgroundColor: `#${color}`, boxShadow: `0px 0px 8px 1px #${color}`}}
      onClick={onClickHandler}
      onAnimationEnd={() => setClicked(false)}
    ></div>
  );
};

export default PegButton;
