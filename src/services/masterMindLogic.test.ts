import { GenerateCode, GetHints, isWin, feedback } from './masterMindLogic'

test("Testing Generate Code", () => {
  expect(GenerateCode(4)).toHaveLength(4);
  expect(GenerateCode(190)).toHaveLength(190);
  expect(GenerateCode(0)).toHaveLength(0);
});

test("Testing Get Hints", () => {
  expect(GetHints(['a'], ['a'])).toEqual([feedback.black])
  expect(GetHints(['b'], ['a'])).toEqual([])
  expect(GetHints([], [])).toEqual([])
  expect(GetHints(['a', 'b'], ['a', 'c'])).toEqual([feedback.black])
  expect(GetHints(['a', 'b'], ['b', 'a'])).toEqual([feedback.white, feedback.white])
  expect(GetHints(['a', 'b', 'c'], ['a', 'c', 'b'])).toEqual([feedback.black, feedback.white, feedback.white])
});

test("Testing is Win", () => {
  expect(isWin([feedback.black], 1)).toBe(true)
  expect(isWin([feedback.black, feedback.white], 1)).toBe(false)
  expect(isWin([feedback.white], 1)).toBe(false)
  expect(isWin([], 0)).toBe(true)
  expect(isWin([], 1)).toBe(false)
})