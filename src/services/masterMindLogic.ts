import { COLORS } from './constants'
import { createFillArrayFromNumberLength, randNumber } from './utils'

export enum feedback {
  black,
  white
}

export type Peg = string

export type Code = Peg[]

export function GenerateCode(codeLength: number): Code {
  const code = createFillArrayFromNumberLength(codeLength, (index) => {
    return COLORS[randNumber(codeLength, 0)]
  })

  return code;
}

export function GetHints(guest: Code, code: Code): feedback[] {
  const hints: feedback[] = []

  code.map((color, index) => {
    if(guest[index] === color) {
      hints.push(feedback.black)
    }else if(guest.some((guestColor) => guestColor === color)) {
      hints.push(feedback.white)
    }
  })
  return hints
}

export function isWin(hint: feedback[], codeLength: number):boolean {
  return hint.length === codeLength && hint.every(feedbackVal => feedbackVal === feedback.black)
}