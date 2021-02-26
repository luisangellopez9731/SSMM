import PegButton from "../pegButton/PegButton";
import {COLORS} from "../../services/constants";
import styles from "./PegBox.styles.module.css";
import {createFillArrayFromNumberLength} from "../../services/utils";
import {FunctionComponent} from "react";

const buttonsLength = 7;
interface props {
  pegButtonClicked: (color: string) => void;
}
const PegBox: FunctionComponent<props> = ({pegButtonClicked}) => {
  const {pegBox} = styles;
  const pegButtonClickedHandler = (color: string) => {
    pegButtonClicked(color);
  };
  return (
    <div className={`${pegBox}`}>
      {createFillArrayFromNumberLength(buttonsLength, index => {
        return (
          <PegButton
            key={index}
            color={COLORS[index]}
            onClick={pegButtonClickedHandler}
          />
        );
      })}
    </div>
  );
};

export default PegBox;
