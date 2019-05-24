import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, setDecks } from './_data'

export function fetchDecks () {
  AsyncStorage.clear()
  setDecks()
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry,
  }))
}

export function deleteDeck (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then((results) => {
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
  })
}
