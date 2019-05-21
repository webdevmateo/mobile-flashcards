export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function removeDeck (id) {
  return {
    type: REMOVE_DECK,
    id,
  }
}

export function addCardToDeck (card) {
  return {
    type: ADD_CARD_TO_DECK,
    card,
  }
}
