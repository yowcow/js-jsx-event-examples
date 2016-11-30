const INPUT_TEXT = 'INPUT_TEXT'
const RESET_TEXT = 'RESET_TEXT'

export const inputText = (text) => ({
  type: INPUT_TEXT,
  text: text
})

export const resetText = () => ({
  type: RESET_TEXT
})
