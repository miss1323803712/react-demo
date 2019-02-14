export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const ODDADD = 'ODDADD'
export const DELAY2 = 'DELAY2'

export function addNumber(text) {
  return { type: INCREASE, text }
}

export function subNumber(text) {
  return { type: DECREASE, text }
}

export function isOddAdd(text) {
  return {
    type: ODDADD,
    text
  }
}

export function delay2Add(text) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({
        type: INCREASE, text
      })
    }, 2000);
  }
}

