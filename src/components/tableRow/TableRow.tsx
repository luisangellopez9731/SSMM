import {FunctionComponent} from "react";
import styles from "./TableRow.styles.module.css";
import {createFillArrayFromNumberLength} from "../../services/utils";
import {feedback} from "../../services/masterMindLogic";

interface props {
  codeLength: number;
  actualGuest?: string[];
  actualHints?: feedback[];
  previousGuest?: string[];
  previousHint?: feedback[];
  hide?: boolean;
}
const TableRow: FunctionComponent<props> = ({
  codeLength,
  actualGuest,
  actualHints,
  previousGuest,
  previousHint,
  hide,
}) => {
  const {
    row,
    codeRow,
    pegContainer,
    feedbackContainer,
    feedbackPegContainer,
    feedbackPeg,
    peg,
    black,
    white,
    hidden,
  } = styles;
  console.log(actualGuest, actualGuest != undefined);
  return (
    <div className={`${row}${hide ? ` ${hidden}` : ""}`}>
      <div className={`${feedbackContainer}`}>
        {createFillArrayFromNumberLength(codeLength, index => {
          let feedbackCondition;
          if (previousHint) {
            feedbackCondition = previousHint
              ? previousHint[index] === feedback.black
                ? ` ${black}`
                : previousHint[index] === feedback.white
                ? ` ${white}`
                : ""
              : "";
          } else {
            feedbackCondition = actualHints
              ? actualHints[index] === feedback.black
                ? ` ${black}`
                : actualHints[index] === feedback.white
                ? ` ${white}`
                : ""
              : "";
          }

          return (
            <div key={index} className={`${feedbackPegContainer}`}>
              <div className={`${feedbackPeg}${feedbackCondition}`}></div>
            </div>
          );
        })}
      </div>
      <div className={`${codeRow}`}>
        {createFillArrayFromNumberLength(codeLength, index => {
          return (
            <div key={index} className={`${pegContainer}`}>
              {previousGuest ? (
                <div
                  className={`${peg}`}
                  style={{
                    backgroundColor: `#${previousGuest[index]}`,
                  }}
                ></div>
              ) : actualGuest != undefined ? (
                <div
                  className={`${peg}`}
                  style={{
                    backgroundColor: `#${actualGuest[index]}`,
                  }}
                ></div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableRow;
