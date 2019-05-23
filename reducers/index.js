import {
  GET_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD_TO_DECK
} from '../actions'

export default function decks (state = {}, action) {
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
      const reduced = Object.entries(state).reduce((acc, entry) => {
        const key = entry[0]
        const value = entry[1]

        if (key !== action.id) {
          return {...acc, [key]: value}
        } else {
          return acc
        }
      }, {})
      return {
        ...reduced
      }
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
