export function createFillArrayFromNumberLength<T>(length: number, cb: (index: number) => T | any) {

  let array = []
  for (let i = 0; i < length; i++) {
    array.push(cb(i))
  }

  return array;
}

export function randNumber(min: number, max: number) {
  return (Math.floor(Math.random() * (max - min)) + min)
}