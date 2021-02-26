import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Table.styles.module.css";

import {createFillArrayFromNumberLength} from "../../services/utils";
import TableRow from "../tableRow/TableRow";
import {feedback} from "../../services/masterMindLogic";

const scrollAmount = 140

interface props {
  codeLength: number;
  rowsLength: number;
  actualGuest: string[];
  guestNumber: number;
  actualHints: feedback[];
  previousGuests: string[][];
  previousHints: feedback[][];
}
const Table: FunctionComponent<props> = ({
  codeLength,
  rowsLength,
  actualGuest,
  guestNumber,
  actualHints,
  previousGuests,
  previousHints,
}) => {
  console.log(actualGuest)
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (guestNumber >= 3 && tableRef && tableRef.current) {
      tableRef.current.scrollTop -= scrollAmount
    }
  }, [guestNumber]);

  useEffect(() => {
    if (tableRef && tableRef.current) {
      tableRef.current.scrollTop = tableRef.current.scrollHeight;
    }
  }, []);
  const getRowsHTML = () => {
    const actualRowIndex = rowsLength - guestNumber - 1;
    const rows = createFillArrayFromNumberLength(rowsLength, index => {
      const reverseIndex = rowsLength - index - 1;
      return actualRowIndex === index ? (
        <TableRow
          codeLength={codeLength}
          key={index}
          actualGuest={actualGuest}
          actualHints={actualHints}
        />
      ) : previousGuests[reverseIndex] !== undefined ? (
        <TableRow
          codeLength={codeLength}
          key={index}
          previousGuest={previousGuests[reverseIndex]}
          previousHint={previousHints[reverseIndex]}
        />
      ) : (
        <TableRow codeLength={codeLength} key={index} hide={true} />
      );
    });

    return rows;
  };

  const rows = getRowsHTML();

  const {container} = styles;
  return (
    <div className={`${container}`} ref={tableRef}>
      {rows}
    </div>
  );
};

export default Table;
