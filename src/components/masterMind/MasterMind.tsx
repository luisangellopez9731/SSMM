import React, {useState, useEffect, FunctionComponent} from "react";
import styles from "./MasterMind.styles.module.css";

import Table from "../table/Table";
import PegBox from "../pegBox/PegBox";
import {
  feedback,
  GenerateCode,
  GetHints,
  isWin,
} from "../../services/masterMindLogic";
import Win from "../win/Win";
import Lose from "../lose/Lose";

interface gameContext {
  actualCode: string[];
  previousCodes: string[][];
}

const gameContextDefaultValue = {
  actualCode: [],
  previousCodes: [],
};

export const GameContext = React.createContext<gameContext>(
  gameContextDefaultValue
);

interface props {
  codeLength: number;
  rowsLength: number;
}

const MasterMind: FunctionComponent<props> = ({codeLength, rowsLength}) => {
  let [gameContextState, setGameContextState] = useState(
    gameContextDefaultValue
  );
  let [actualGuest, setActualGuest] = useState<string[]>([]);
  let [codeToGuest, setCodeToGuest] = useState(GenerateCode(codeLength));
  let [guestNumber, setGuestNumber] = useState(0);
  let [actualHints, setActualHints] = useState<feedback[]>([]);
  let [previousGuests, setPreviousGuests] = useState<string[][]>([]);
  let [previousHints, setPreviousHints] = useState<feedback[][]>([]);
  let [showWin, setShowWin] = useState(false)
  let [showLose, setShowLose] = useState(false)

  const pegButtonClickedHandler = (color: string) => {
    let localActualGuest = [...actualGuest];
    if (localActualGuest.length === codeLength) {
      localActualGuest[codeLength - 1] = color;
    } else {
      localActualGuest.push(color);
    }
    setActualGuest(localActualGuest);
  };

  const finishGame = () => {
    setShowWin(true)
  };

  const nextTry = (hints: feedback[]) => {
    setPreviousGuests([...previousGuests, actualGuest]);
    setPreviousHints([...previousHints, hints]);
    setActualGuest([]);
    setActualHints([]);
    setGuestNumber(guestNumber + 1);
  };

  const loose = () => {
    setShowLose(true)
  };

  const guestOnClickHandler = () => {
    const hints = GetHints(actualGuest, codeToGuest);
    setActualHints(hints);
    if (isWin(hints, codeLength)) {
      //finish game
      finishGame();
    } else if (guestNumber === rowsLength - 1) {
      // Loose
      loose();
    } else {
      // pass to another try
      nextTry(hints);
    }
  };

  const {
    generalContainer,
    container,
    tableContainer,
    pegBoxContainer,
    buttonsContainer,
    button,
    playableContainer,
    textContainer,
  } = styles;
  return (
    <>
      <div className={textContainer}>
        <h1>MasterMind</h1>
        <p>
          If you don't know how to play, you can{" "}
          <a target="blank" href="https://bit.ly/2ZtfXpg">
            visit this site
          </a>{" "}
          for a little explanation about the game.
        </p>
      </div>
      <div className={`${generalContainer}`}>
        <div className={`${playableContainer}`}>
          <div className={`${container} ${tableContainer}`}>
            <Table
              codeLength={codeLength}
              rowsLength={rowsLength}
              guestNumber={guestNumber}
              actualGuest={actualGuest}
              actualHints={actualHints}
              previousGuests={previousGuests}
              previousHints={previousHints}
            />
          </div>
          <div className={`${container} ${pegBoxContainer}`}>
            <PegBox pegButtonClicked={pegButtonClickedHandler} />
          </div>
        </div>
        <div className={`${buttonsContainer}`}>
          <button
            onClick={guestOnClickHandler}
            disabled={actualGuest.length !== codeLength}
            className={`${button}`}
          >
            Guest
          </button>
        </div>
      </div>
      {showWin && <Win />}
      {showLose && <Lose />}
    </>
  );
};

export default MasterMind;
