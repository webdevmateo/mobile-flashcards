

function decks (state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case REMOVE_DECK:
      const reduced = Object.keys(state).length > 0
        ? Object.keys(state).reduce((acc, key) => (
          key !== action.id
            ? ...acc, key
            : acc
        ), {})
        : state
      return reduced
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: state[action.id].questions.concat([action.card])
        }
      }
    default:
      return state
  }
}
