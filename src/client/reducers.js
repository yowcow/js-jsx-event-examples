export const textFieldReducer = (
  state = '',
  action
) => {
  switch (action.type) {
    case 'INPUT_TEXT':
      return action.text
    case 'RESET_TEXT':
      return ''
    default:
      return state
  }
}
